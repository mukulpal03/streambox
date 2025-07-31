import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Video {
  title: string;
  description: string;
  playbackId: string;
}

const Watch: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    axios.get<Video>(`/api/videos/${id}`).then((res) => setVideo(res.data));
  }, [id]);

  if (!video) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">{video.title}</h1>
      <video
        controls
        className="w-full max-w-3xl"
        src={`https://stream.mux.com/${video.playbackId}.m3u8`}
        typeof="application/x-mpegURL"
      />
      <p className="mt-2">{video.description}</p>
    </div>
  );
};

export default Watch;
