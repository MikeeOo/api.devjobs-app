import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const authRouter: Router = Router();

authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);
authRouter.post("/logout", AuthController.logout);

export default authRouter;
