import { Request, Response } from "express";
import TestModel from "../models/TestModel";

export default class TestController {
    static testGet = (req: Request, res: Response): void => {
        console.log(req);
        res.send(`Ok!`);
    };

    static testAdd = async (req: Request, res: Response): Promise<void> => {
        console.log(req.body.user);

        await new TestModel({ user: req.body.user }).save();

        res.json({ status: "Created!" });
    };
}
