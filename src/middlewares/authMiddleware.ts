import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import UserModel from "../models/UserModel";

interface User {
	id?: string;
}

declare global {
	namespace Express {
		interface Request {
			user?: User;
		}
	}
}

export const protect = asyncHandler(
	async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		let token;

		token = req.cookies.jwt;

		if (token) {
			try {
				const decoded: string | JwtPayload = jwt.verify(token, process.env.JWT_SECRET);

				if (typeof decoded === "object" && "userId" in decoded) {
					req.user = await UserModel.findById(decoded.userId).select("-password");
				}

				next();
			} catch (err) {
				res.status(401);
				throw new Error("Not authorized, invalid token");
			}
		} else {
			res.status(401);
			throw new Error("Not authorized, no token");
		}
	}
);
