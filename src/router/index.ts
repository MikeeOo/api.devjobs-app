import { Router } from "express";
import JobsController from "../controllers/JobsController";

const router: Router = Router();

router.get("/jobs", JobsController.getAll);
router.get("/jobs/:id", JobsController.getById);

router.post("/", JobsController.add);

export default router;
