// Instagram API integration (server-side only)
// Access token is kept server-side for security - never exposed to the client

export interface InstagramReel {
  id: string;
  caption: string;
  thumbnail: string;
  mediaUrl: string;
  permalink: string;
  timestamp: string;
  formattedDate: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return '1 day ago';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

// Fetch Instagram Reels via Graph API
export async function fetchInstagramReels(): Promise<InstagramReel[]> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    console.error('[Instagram] Missing INSTAGRAM_ACCESS_TOKEN environment variable');
    return [];
  }

  try {
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&limit=50&access_token=${accessToken}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      console.error('[Instagram] API error:', response.status, response.statusText);
      return [];
    }

    const data = await response.json();

    if (!data.data) return [];

    const reels: InstagramReel[] = data.data
      .filter((item: { media_type: string }) => item.media_type === 'VIDEO')
      .map((item: { id: string; caption?: string; thumbnail_url?: string; media_url?: string; permalink: string; timestamp: string }) => ({
        id: item.id,
        caption: item.caption || 'Immigration Law Tips',
        thumbnail: item.thumbnail_url || item.media_url || '',
        mediaUrl: item.media_url || '',
        permalink: item.permalink,
        timestamp: item.timestamp,
        formattedDate: formatDate(item.timestamp),
      }));

    return reels;
  } catch (error) {
    console.error('[Instagram] Error fetching reels:', error);
    return [];
  }
}
