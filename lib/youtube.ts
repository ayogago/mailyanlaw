// YouTube API integration

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_HANDLE = '@mailyan-law';

export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  publishedAt: string;
  youtubeId: string;
}

export interface YouTubeShort {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  publishedAt: string;
  youtubeId: string;
}

// Helper function to format view count
function formatViewCount(viewCount: number): string {
  if (viewCount >= 1000000) {
    return (viewCount / 1000000).toFixed(1) + 'M';
  } else if (viewCount >= 1000) {
    return (viewCount / 1000).toFixed(1) + 'K';
  }
  return viewCount.toString();
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

// Helper function to parse ISO 8601 duration to readable format
function parseDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return '0:00';

  const hours = (match[1] || '').replace('H', '');
  const minutes = (match[2] || '').replace('M', '');
  const seconds = (match[3] || '').replace('S', '');

  let result = '';
  if (hours) result += hours + ':';
  result += (minutes || '0').padStart(hours ? 2 : 1, '0') + ':';
  result += (seconds || '0').padStart(2, '0');

  return result;
}

// Get channel ID from handle
async function getChannelId(): Promise<string | null> {
  if (!YOUTUBE_API_KEY) {
    console.error('YouTube API key is not set');
    return null;
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${CHANNEL_HANDLE}&key=${YOUTUBE_API_KEY}`
    );
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      return data.items[0].snippet.channelId;
    }
    return null;
  } catch (error) {
    console.error('Error fetching channel ID:', error);
    return null;
  }
}

// Fetch all videos from the channel
export async function fetchYouTubeVideos(): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_API_KEY) {
    console.error('YouTube API key is not set');
    return [];
  }

  try {
    // Get channel ID first
    const channelId = await getChannelId();
    if (!channelId) return [];

    // Fetch videos from the channel
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&order=date&type=video&key=${YOUTUBE_API_KEY}`
    );
    const searchData = await searchResponse.json();

    if (!searchData.items) return [];

    // Get video IDs
    const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',');

    // Fetch video details (duration, views)
    const detailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    );
    const detailsData = await detailsResponse.json();

    if (!detailsData.items) return [];

    // Filter out Shorts (videos under 60 seconds)
    const videos: YouTubeVideo[] = detailsData.items
      .filter((item: any) => {
        const duration = item.contentDetails.duration;
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        if (!match) return false;

        const hours = parseInt((match[1] || '0H').replace('H', ''));
        const minutes = parseInt((match[2] || '0M').replace('M', ''));
        const seconds = parseInt((match[3] || '0S').replace('S', ''));

        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        return totalSeconds > 60; // Only videos longer than 60 seconds
      })
      .map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
        duration: parseDuration(item.contentDetails.duration),
        views: formatViewCount(parseInt(item.statistics.viewCount)),
        publishedAt: formatDate(item.snippet.publishedAt),
        youtubeId: item.id,
      }));

    return videos;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}

// Fetch Shorts from the channel
export async function fetchYouTubeShorts(): Promise<YouTubeShort[]> {
  if (!YOUTUBE_API_KEY) {
    console.error('YouTube API key is not set');
    return [];
  }

  try {
    // Get channel ID first
    const channelId = await getChannelId();
    if (!channelId) return [];

    // Fetch videos from the channel
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&order=date&type=video&key=${YOUTUBE_API_KEY}`
    );
    const searchData = await searchResponse.json();

    if (!searchData.items) return [];

    // Get video IDs
    const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',');

    // Fetch video details (duration, views)
    const detailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    );
    const detailsData = await detailsResponse.json();

    if (!detailsData.items) return [];

    // Filter Shorts (videos under 60 seconds)
    const shorts: YouTubeShort[] = detailsData.items
      .filter((item: any) => {
        const duration = item.contentDetails.duration;
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        if (!match) return false;

        const hours = parseInt((match[1] || '0H').replace('H', ''));
        const minutes = parseInt((match[2] || '0M').replace('M', ''));
        const seconds = parseInt((match[3] || '0S').replace('S', ''));

        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        return totalSeconds <= 60; // Only videos 60 seconds or less
      })
      .map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
        views: formatViewCount(parseInt(item.statistics.viewCount)),
        publishedAt: formatDate(item.snippet.publishedAt),
        youtubeId: item.id,
      }));

    return shorts;
  } catch (error) {
    console.error('Error fetching YouTube Shorts:', error);
    return [];
  }
}
