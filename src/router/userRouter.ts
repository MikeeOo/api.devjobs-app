import { Router } from "express";
import UsersController from "../controllers/UsersController";

const userRouter: Router = Router();

userRouter.post("/register", UsersController.register);
userRouter.post("/login", UsersController.login);

export default userRouter;
