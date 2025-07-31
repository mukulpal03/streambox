import { Request, Response } from "express";
import mux from "../libs/mux";

export const createUpload = async (req: Request, res: Response) => {
  const upload = await mux.video.uploads.create({
    new_asset_settings: { playback_policy: ["public"] },
    cors_origin: "*",
  });

  return res.status(200).json({ id: upload.id, url: upload.url });
};

export const uploadStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const upload = await mux.video.uploads.retrieve(id);

  return res.status(200).json(upload);
};

export const getAsset = async (req: Request, res: Response) => {
  const asset = await mux.video.assets.retrieve(req.params.id);

  res.json(asset);
};
