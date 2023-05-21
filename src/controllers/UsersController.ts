import { Request, Response } from "express";

export default class UsersController {
    static test = (req: Request, res: Response): void => {
        console.log(req);
        res.send(`Ok!`);
    };
}
