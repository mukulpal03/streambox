import { Router } from "express";
import { createVideo } from "../controllers/video";

const router = Router();

router.route("/create").post(createVideo);

export default router;