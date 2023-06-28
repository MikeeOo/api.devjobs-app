import { Request, Response, Router } from "express";
import UserController from "../controllers/UserController";

const userRouter: Router = Router();

userRouter.post("/login", UserController.auth);
userRouter.post("/register", UserController.register);

export default userRouter;
