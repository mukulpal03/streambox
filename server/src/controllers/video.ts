import { Request, Response } from "express";
import mux from "../libs/mux";

export const createVideo = async (req: Request, res: Response) => {
  const upload = await mux.video.uploads.create({
    new_asset_settings: { playback_policy: ["public"] },
    cors_origin: "http://localhost:3000", // frontend origin
  });

  console.log(upload);
};
