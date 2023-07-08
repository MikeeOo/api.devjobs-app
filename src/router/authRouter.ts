import { Router } from "express";
import { login, register, logout } from "../controllers/authController";

const authRouter: Router = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;
