import { Request, Response } from "express";
import Video from "../models/video";

export const createVideo = async (req: Request, res: Response) => {
  const { title, description, playbackId } = req.body;

  if (!title || !description || !playbackId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const video = new Video({ title, description, playbackId });
  await video.save();

  res.status(201).json(video);
};
