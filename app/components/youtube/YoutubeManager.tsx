"use client";

import { useState } from "react";
import YoutubePlayer from "./YoutubePlayer";
import YoutubeList from "./YoutubeList";
import { VideoItem } from "./Youtube";

export default function YoutubeManager({ initialVideos }: { initialVideos: VideoItem[] }) {
    // Stan aktywnego filmu (domyślnie pierwszy z listy)
    const [activeVideo, setActiveVideo] = useState<VideoItem>(initialVideos[0]);

    return (
        <div className="space-y-8 lg:space-y-12">
            <div className="w-full px-5">
                <YoutubePlayer 
                    videoId={activeVideo.id} 
                    thumbnail={activeVideo.thumbnail} 
                    title={activeVideo.title} 
                />
            </div>

            <div className="w-full px-5 md:px-10 relative">
                <YoutubeList 
                    videos={initialVideos} 
                    onVideoSelect={(video) => {
                        setActiveVideo(video);
                        window.scrollTo({ top: document.getElementById('youtube')?.offsetTop, behavior: 'smooth' });
                    }}
                    activeId={activeVideo.id}
                />
            </div>
        </div>
    );
}