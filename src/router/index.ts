import { Router } from "express";
import UsersController from "../controllers/UsersController";

const router: Router = Router();

router.get("/", UsersController.test);

export default router;
