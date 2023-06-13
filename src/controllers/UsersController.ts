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

    static login = async (req: Request, res: Response) => {
        const user = await UserModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).send({
                message: "Email or password invalid",
            });
        }

        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(404).send({
                message: "Email or password invalid",
            });
        }

        return res.status(200).send({
            message: "Login succefully",
        });
    };
}
