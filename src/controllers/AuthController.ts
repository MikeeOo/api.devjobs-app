import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import UserModel from "../models/UserModel";
import generateToken from "../utils/generateToken";

export class AuthController {
	static register = asyncHandler(async (req: Request, res: Response): Promise<void> => {
		const { name, surname, email, password } = req.body;

		const userExists = await UserModel.findOne({ email });

		if (userExists) {
			res.status(400);
			throw new Error("User already exists");
		}

		const user = await UserModel.create({
			name,
			email,
			surname,
			password,
		});

		if (user) {
			generateToken(res, user._id.toString());

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

	static login = asyncHandler(async (req: Request, res: Response): Promise<void> => {
		const { email, password } = req.body;

		const user = await UserModel.findOne({ email });

		if (user && (await user.matchPassword(password))) {
			generateToken(res, user._id.toString());

			res.status(201).json({
				_id: user._id,
				name: user.name,
				surname: user.surname,
				email: user.email,
			});
		} else {
			res.status(401);
			throw new Error("Invalid email or password");
		}
	});

	static logout = asyncHandler(async (req: Request, res: Response): Promise<void> => {
		res.cookie("jwt", "", {
			httpOnly: true,
			expires: new Date(0),
		});

		res.status(200).json({ message: "User logged out" });
	});
}
