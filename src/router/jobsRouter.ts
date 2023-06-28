import { Router } from "express";
import JobsController from "../controllers/JobsController";

const jobsRouter: Router = Router();

jobsRouter.get("/jobs", JobsController.getAll);
jobsRouter.get("/jobs/:id", JobsController.getById);
jobsRouter.post("/", JobsController.add);

export default jobsRouter;
