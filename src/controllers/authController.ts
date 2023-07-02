import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import UserModel from "../models/UserModel";

export const login = asyncHandler(async (req: Request, res: Response): Promise<void> => {
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

export const register = asyncHandler(async (req: Request, res: Response): Promise<void> => {
	const { name, surname, email, password } = req.body;

	const userExists = await UserModel.findOne({ email });

	if (!userExists) {
		res.status(400);
		throw new Error("User already exists");
	}

	const user = await UserModel.create({ name, surname, email, password });

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			surname: user.surname,
			email: user.email,
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});
