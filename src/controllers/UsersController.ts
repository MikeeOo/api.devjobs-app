import { Request, Response } from "express";
import bcrypt from "bcrypt";

import UserModel from "../models/UserModel";

export default class UsersController {
    static register = async (req: Request, res: Response) => {
        try {
            await new UserModel({
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8),
            }).save();
            res.send("User Created!");
        } catch (e) {
            console.log(e);
            res.json(e);
        }
    };
}
