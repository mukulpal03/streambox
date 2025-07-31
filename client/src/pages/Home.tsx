import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Video {
  _id: string;
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    axios.get<Video[]>("http://localhost:3000/api/videos").then((res) => setVideos(res.data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      {videos.map((video) => (
        <div key={video._id} className="border p-2">
          <h2 className="text-lg font-bold">{video.title}</h2>
          <p>{video.description}</p>
          <Link to={`/watch/${video._id}`} className="text-blue-500">
            Watch
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
