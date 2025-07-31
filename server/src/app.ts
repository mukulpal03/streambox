import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/user";
import muxRoutes from "./routes/mux";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/mux", muxRoutes);

export default app;
