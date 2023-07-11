import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

export const getUserProfile = asyncHandler(async (req: Request, res: Response): Promise<void> => {
	res.status(200).json({ message: "getUserProfile" });
});

export const updateUserProfile = asyncHandler(
	async (req: Request, res: Response): Promise<void> => {
		res.status(200).json({ message: "updateUserProfile" });
	}
);
