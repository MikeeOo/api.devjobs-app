import { Schema, model, Model } from "mongoose";

interface IUser {
	name: string;
	surname: string;
	email: string;
	password: string;
}

const userSchema: Schema<IUser> = new Schema(
	{
		name: {
			type: String,
			required: true,
			lowercase: true,
			trim: true,
		},
		surname: {
			type: String,
			required: true,
			lowercase: true,
			trim: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const UserModel: Model<IUser> = model("Users", userSchema);

export default UserModel;
