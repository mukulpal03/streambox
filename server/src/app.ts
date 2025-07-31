import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/user";
import videoRoutes from "./routes/video";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);

export default app;
