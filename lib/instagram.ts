// Instagram API integration

const INSTAGRAM_ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_USER_ID = process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID;

export interface InstagramReel {
  id: string;
  caption: string;
  thumbnail: string;
  mediaUrl: string;
  permalink: string;
  timestamp: string;
  formattedDate: string;
}

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) return '1 day ago';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

// Fetch Instagram Reels
export async function fetchInstagramReels(): Promise<InstagramReel[]> {
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
    console.error('Instagram credentials are not set');
    return [];
  }

  try {
    // Fetch user's media
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      console.error('Instagram API error:', response.statusText);
      return [];
    }

    const data = await response.json();

    if (!data.data) return [];

    // Filter only reels and map to our format
    const reels: InstagramReel[] = data.data
      .filter((item: any) => item.media_type === 'VIDEO' || item.media_type === 'REELS')
      .map((item: any) => ({
        id: item.id,
        caption: item.caption || 'No caption',
        thumbnail: item.thumbnail_url || item.media_url,
        mediaUrl: item.media_url,
        permalink: item.permalink,
        timestamp: item.timestamp,
        formattedDate: formatDate(item.timestamp),
      }));

    return reels;
  } catch (error) {
    console.error('Error fetching Instagram reels:', error);
    return [];
  }
}
