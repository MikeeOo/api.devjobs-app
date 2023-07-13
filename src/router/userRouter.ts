import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { protect } from "../middlewares/authMiddleware";

const userRouter: Router = Router();

userRouter
	.route("/profile")
	.get(protect, UserController.getUserProfile)
	.put(protect, UserController.updateUserProfile);

export default userRouter;
