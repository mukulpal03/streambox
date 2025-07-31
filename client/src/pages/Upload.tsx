import React, { useState } from "react";
import axios from "axios";

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleUpload = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/mux/create");
      const uploadUrl: string = res.data.uploadUrl;

      if (!file) throw new Error("No file selected");

      await axios.put(uploadUrl, file, {
        headers: { "Content-Type": file.type },
      });

      setMessage("Video uploaded. Waiting for processing...");
    } catch (err) {
      console.log(err);
      setMessage("Upload failed");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Title"
        className="block w-full mb-2 p-2 border"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="block w-full mb-2 p-2 border"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="file"
        className="mb-2"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={handleUpload}
      >
        Upload
      </button>
      <p className="mt-2">{message}</p>
    </div>
  );
};

export default Upload;
