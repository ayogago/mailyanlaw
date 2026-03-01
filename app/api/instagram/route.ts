import { NextResponse } from 'next/server';

interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

interface InstagramApiResponse {
  data: InstagramMedia[];
  paging?: {
    cursors: { before: string; after: string };
    next?: string;
  };
}

// In-memory cache
let cachedReels: InstagramMedia[] | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export async function GET() {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!accessToken) {
      console.error('[Instagram API] Missing INSTAGRAM_ACCESS_TOKEN');
      return NextResponse.json(
        { error: 'Instagram not configured' },
        { status: 500 }
      );
    }

    // Return cached data if still fresh
    if (cachedReels && Date.now() - cacheTimestamp < CACHE_DURATION) {
      return NextResponse.json({ reels: cachedReels });
    }

    // Fetch media from Instagram Graph API
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
    const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=50&access_token=${accessToken}`;

    const response = await fetch(url, { next: { revalidate: 3600 } });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[Instagram API] Error fetching media:', response.status, errorData);

      // If token expired, try to refresh it
      if (response.status === 400 && errorData?.error?.code === 190) {
        const refreshed = await refreshAccessToken(accessToken);
        if (refreshed) {
          // Retry with refreshed token - recursive call will use the new env var
          const retryUrl = `https://graph.instagram.com/me/media?fields=${fields}&limit=50&access_token=${refreshed}`;
          const retryResponse = await fetch(retryUrl);
          if (retryResponse.ok) {
            const retryData: InstagramApiResponse = await retryResponse.json();
            const reels = filterReels(retryData.data);
            cachedReels = reels;
            cacheTimestamp = Date.now();
            return NextResponse.json({ reels });
          }
        }
        return NextResponse.json(
          { error: 'Instagram access token expired. Please refresh it.' },
          { status: 401 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to fetch Instagram media' },
        { status: response.status }
      );
    }

    const data: InstagramApiResponse = await response.json();

    // Fetch additional pages if available (up to 100 total)
    let allMedia = data.data;
    let nextUrl = data.paging?.next;
    let pages = 1;

    while (nextUrl && pages < 3) {
      const nextResponse = await fetch(nextUrl);
      if (!nextResponse.ok) break;
      const nextData: InstagramApiResponse = await nextResponse.json();
      allMedia = [...allMedia, ...nextData.data];
      nextUrl = nextData.paging?.next;
      pages++;
    }

    // Filter for video/reel content only
    const reels = filterReels(allMedia);

    // Update cache
    cachedReels = reels;
    cacheTimestamp = Date.now();

    return NextResponse.json({ reels });
  } catch (error) {
    console.error('[Instagram API] Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function filterReels(media: InstagramMedia[]): InstagramMedia[] {
  return media
    .filter((item) => item.media_type === 'VIDEO')
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

async function refreshAccessToken(currentToken: string): Promise<string | null> {
  try {
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.error('[Instagram API] Token refresh failed:', response.status);
      return null;
    }

    const data = await response.json();
    console.log('[Instagram API] Token refreshed successfully, expires in', data.expires_in, 'seconds');

    // Note: In production, you'd want to persist this new token
    // For now, update the in-memory reference
    process.env.INSTAGRAM_ACCESS_TOKEN = data.access_token;
    return data.access_token;
  } catch (error) {
    console.error('[Instagram API] Token refresh error:', error);
    return null;
  }
}
