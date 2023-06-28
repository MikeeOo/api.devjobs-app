import { Router, Request, Response } from "express";

const indexRouter: Router = Router();

indexRouter.get("/", (req: Request, res: Response) =>
  res.send("Server is working...")
);

export default indexRouter;
