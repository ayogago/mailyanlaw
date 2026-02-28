import { NextResponse } from "next/server";

interface InstagramPost {
  id: string;
  media_type: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

interface CachedData {
  posts: InstagramPost[];
  fetchedAt: number;
}

// In-memory cache — persists across requests while the server is running
let cache: CachedData | null = null;
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour

// Hardcoded fallback reels (existing ones from the site)
const FALLBACK_REELS = [
  { id: "DPhkZ5oARh6", permalink: "https://www.instagram.com/reel/DPhkZ5oARh6/", caption: "Immigration Law Tips", timestamp: "" },
  { id: "DPEt_EAicbh", permalink: "https://www.instagram.com/reel/DPEt_EAicbh/", caption: "Immigration Law Tips", timestamp: "" },
  { id: "DMOC0Y0SnvH", permalink: "https://www.instagram.com/reel/DMOC0Y0SnvH/", caption: "Immigration Law Tips", timestamp: "" },
  { id: "DLsmVcIyE8u", permalink: "https://www.instagram.com/reel/DLsmVcIyE8u/", caption: "Immigration Law Tips", timestamp: "" },
  { id: "DLn9H0PyGSt", permalink: "https://www.instagram.com/reel/DLn9H0PyGSt/", caption: "Immigration Law Tips", timestamp: "" },
  { id: "DLlyrmtRgQT", permalink: "https://www.instagram.com/reel/DLlyrmtRgQT/", caption: "Immigration Law Tips", timestamp: "" },
  { id: "DLkqov7RKBJ", permalink: "https://www.instagram.com/reel/DLkqov7RKBJ/", caption: "Immigration Law Tips", timestamp: "" },
  { id: "DKy9fGEqWDO", permalink: "https://www.instagram.com/reel/DKy9fGEqWDO/", caption: "Immigration Law Tips", timestamp: "" },
  { id: "DJr6YWcyMur", permalink: "https://www.instagram.com/reel/DJr6YWcyMur/", caption: "Immigration Law Tips", timestamp: "" },
  { id: "DJnpri1ROj7", permalink: "https://www.instagram.com/reel/DJnpri1ROj7/", caption: "Immigration Law Tips", timestamp: "" },
  { id: "DJX2fdUShFD", permalink: "https://www.instagram.com/reel/DJX2fdUShFD/", caption: "Immigration Law Tips", timestamp: "" },
  { id: "DJVOni5yNU5", permalink: "https://www.instagram.com/reel/DJVOni5yNU5/", caption: "Immigration Law Tips", timestamp: "" },
  { id: "DIUFY_4PI-t", permalink: "https://www.instagram.com/reel/DIUFY_4PI-t/", caption: "Immigration Law Tips", timestamp: "" },
];

async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!accessToken || !userId) {
    console.log("[Instagram API] No credentials configured, using fallback reels");
    return FALLBACK_REELS.map((r) => ({ ...r, media_type: "VIDEO", media_url: "" }));
  }

  const url = `https://graph.instagram.com/v21.0/${userId}/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&limit=30&access_token=${accessToken}`;

  const response = await fetch(url, { next: { revalidate: 0 } });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("[Instagram API] Error fetching posts:", response.status, errorText);
    throw new Error(`Instagram API error: ${response.status}`);
  }

  const data = await response.json();
  return data.data || [];
}

export async function GET() {
  try {
    // Return cached data if fresh
    if (cache && Date.now() - cache.fetchedAt < CACHE_DURATION_MS) {
      return NextResponse.json({
        posts: cache.posts,
        cached: true,
        cachedAt: new Date(cache.fetchedAt).toISOString(),
      });
    }

    const posts = await fetchInstagramPosts();

    // Update cache
    cache = { posts, fetchedAt: Date.now() };

    return NextResponse.json({
      posts,
      cached: false,
      cachedAt: new Date(cache.fetchedAt).toISOString(),
    });
  } catch (error) {
    console.error("[Instagram API] Failed to fetch:", error);

    // If we have stale cache, return it rather than failing
    if (cache) {
      return NextResponse.json({
        posts: cache.posts,
        cached: true,
        stale: true,
        cachedAt: new Date(cache.fetchedAt).toISOString(),
      });
    }

    // Last resort: return fallback reels
    return NextResponse.json({
      posts: FALLBACK_REELS.map((r) => ({ ...r, media_type: "VIDEO", media_url: "" })),
      cached: false,
      fallback: true,
    });
  }
}
