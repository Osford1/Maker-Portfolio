import React from "react";

type VideoItem = {
  src: string;
  label?: string;
};

export default function VideoGallery({ videos }: { videos: VideoItem[] }) {
  if (!videos.length) {
    return <p className="text-sm subtle">No videos yet.</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {videos.map((video) => (
        <div key={video.src} className="card p-3">
          <video controls className="w-full rounded-lg">
            <source src={video.src} />
          </video>
          {video.label && <p className="text-sm subtle mt-2">{video.label}</p>}
        </div>
      ))}
    </div>
  );
}
