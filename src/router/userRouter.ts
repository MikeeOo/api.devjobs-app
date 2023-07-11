import { Router } from "express";
import { getUserProfile, updateUserProfile } from "../controllers/userController";
import { protect } from "../middlewares/authMiddleware";

const userRouter: Router = Router();

userRouter.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);

export default userRouter;
