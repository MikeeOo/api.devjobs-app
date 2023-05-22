import { Router } from "express";
import TestController from "../controllers/TestController";

const router: Router = Router();

router.get("/", TestController.testGet);
router.post("/", TestController.testAdd);

export default router;
