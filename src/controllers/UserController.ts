import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import UserModel from "../models/UserModel";

export class UserController {
	static getUserProfile = asyncHandler(async (req: Request, res: Response): Promise<void> => {
		console.log(req);

		// const user = await UserModel.findById(req.user._id);
		//
		// if (user) {
		// 	res.json({
		// 		_id: user._id,
		// 		name: user.name,
		// 		email: user.email,
		// 	});
		// } else {
		// 	res.status(404);
		// 	throw new Error("User not found");
		// }
	});

	static updateUserProfile = asyncHandler(async (req: Request, res: Response): Promise<void> => {
		res.status(200).json({ message: "updateUserProfile" });
	});
}
