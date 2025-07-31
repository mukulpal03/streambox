import mongoose from "mongoose";
import { IUser } from "../types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/env";

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateJWT = function () {
  return jwt.sign({ id: this._id }, config.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const User = mongoose.model<IUser>("User", userSchema);

export default User;
