import { Router } from "express";
import JobsController from "../controllers/JobsController";
import UsersController from "../controllers/UsersController";

const router: Router = Router();

router.get("/jobs", JobsController.getAll);
router.get("/jobs/:id", JobsController.getById);

router.post("/", JobsController.add);

router.post("/u/register", UsersController.register);
router.post("/u/login", UsersController.login);

export default router;
