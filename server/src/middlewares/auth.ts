import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/env";
import User from "../models/user";

export const isLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded: any = jwt.verify(token, config.JWT_SECRET as string);
    const user = await User.findById(decoded.id).select("-password");
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
