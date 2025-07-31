import { Request, Response } from "express";
import User from "../models/user";
import config from "../config/env";

export const registerUser = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = new User({ email, password, username });
  await user.save();

  const token = user.generateJWT();

  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
    })
    .json({ message: "User registered successfully", user });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials", user });
  }

  const token = user.generateJWT();

  res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
    })
    .json({ message: "User logged in successfully" });
};

export const logoutUser = async (req: Request, res: Response) => {
  res
    .status(200)
    .clearCookie("token", {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
    })
    .json({ message: "User logged out successfully" });
};

export const getUser = async (req: Request, res: Response) => {
  const user = req.user;
  res.status(200).json(user);
};
