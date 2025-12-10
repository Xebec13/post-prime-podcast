// src/utils/youtube.ts

export interface YouTubeVideoDetails {
  videoId: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  statistics: {
    viewCount: string;
    likeCount: string;
    commentCount: string;
  };
}

export async function getLatestVideoDetails(): Promise<YouTubeVideoDetails | null> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const uploadsId = process.env.YOUTUBE_UPLOADS_ID;

  if (!apiKey || !uploadsId) {
    console.error("Błąd: Brak kluczy API w .env.local");
    return null;
  }

  try {
    // KROK 1: Pobieramy najnowszy film z playlisty "Uploads" (tanie zapytanie)
    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=1&key=${apiKey}`;
    
    // Revalidate co 10 minut (600s) - kompromis między aktualnością a limitami
    const playlistRes = await fetch(playlistUrl, { next: { revalidate: 600 } });
    
    if (!playlistRes.ok) {
      const err = await playlistRes.text();
      console.error("Błąd playlistItems:", err);
      return null;
    }

    const playlistData = await playlistRes.json();
    if (!playlistData.items || playlistData.items.length === 0) return null;

    const snippet = playlistData.items[0].snippet;
    const videoId = snippet.resourceId.videoId;

    // KROK 2: Pobieramy statystyki dla tego konkretnego ID (videos endpoint)
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`;
    const videoRes = await fetch(videoUrl, { next: { revalidate: 600 } });

    if (!videoRes.ok) {
        console.error("Błąd videos endpoint:", await videoRes.text());
        return null;
    }

    const videoData = await videoRes.json();
    if (!videoData.items || videoData.items.length === 0) return null;

    const item = videoData.items[0];

    // Twoja logika priorytetów zdjęcia
    const thumbs = item.snippet.thumbnails;
    const bestThumbnail = thumbs.maxres?.url || thumbs.high?.url || thumbs.medium?.url;

    return {
      videoId: item.id,
      title: item.snippet.title,
      thumbnail: bestThumbnail,
      publishedAt: item.snippet.publishedAt,
      statistics: {
        viewCount: item.statistics.viewCount || "0",
        likeCount: item.statistics.likeCount || "0",
        commentCount: item.statistics.commentCount || "0",
      },
    };

  } catch (error) {
    console.error("Krytyczny błąd w getLatestVideoDetails:", error);
    return null;
  }
}