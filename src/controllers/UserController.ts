import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

import UserModel from "../models/UserModel";

export default class UserController {
  static auth = asyncHandler(async (req: Request, res: Response) => {
    // const user = await UserModel.findOne({ email: req.body.email });

    // if (!user) {
    //   return res.status(404).send({
    //     message: "Email or password invalid",
    //   });
    // }
    //
    // if (!bcrypt.compareSync(req.body.password, user.password)) {
    //   return res.status(404).send({
    //     message: "Email or password invalid",
    //   });
    // }
    //
    // return res.status(200).send({
    //   message: "Login successfully",
    // });
    res.send("userAuth Function");
  });

  static register = asyncHandler(async (req: Request, res: Response) => {
    // try {
    //   await new UserModel({
    //     email: req.body.email,
    //     password: bcrypt.hashSync(req.body.password, 8),
    //   }).save();
    //   res.send("User Created!");
    // } catch (e) {
    //   console.log(e);
    //   res.json(e);
    // }
    res.send("userRegister Function");
  });
}
