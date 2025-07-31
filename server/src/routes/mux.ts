import { Router } from "express";
import { createUpload, getAsset, uploadStatus } from "../controllers/mux";

const router = Router();

router.route("/create").post(createUpload);

router.route("/status/:id").get(uploadStatus);

router.route("/asset/:id").get(getAsset);

export default router;
