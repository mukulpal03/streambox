import { Router } from "express";
import {
  getUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user";
import { isLoggedIn } from "../middlewares/auth";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(isLoggedIn, logoutUser);
router.route("/profile").get(isLoggedIn, getUser);

export default router;
