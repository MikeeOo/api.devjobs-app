import { Request, Response } from "express";
import UserModel from "../models/UserModel";

export default class UsersController {
    static register = async (req: Request, res: Response) => {
        try {
            await new UserModel({
                email: req.body.email,
                password: req.body.password,
            }).save();
            res.send("User Created!");
        } catch (e) {
            console.log(e);
            res.json(e);
        }
    };
}
