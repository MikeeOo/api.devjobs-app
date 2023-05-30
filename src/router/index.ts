import { Router } from "express";
import JobsController from "../controllers/JobsController";

const router: Router = Router();

router.get("/jobs", JobsController.getAll);
router.post("/", JobsController.add);

export default router;
