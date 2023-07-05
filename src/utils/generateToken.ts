import { Response } from "express";
import jwt from "jsonwebtoken";

const generateToken = (res: Response, userId: string): void => {
	const token: string = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "2h",
	});

	res.cookie("jwt", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV !== "development",
		sameSite: "strict",
		maxAge: 2 * 60 * 60 * 1000,
	});
};

export default generateToken;
