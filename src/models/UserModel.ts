import { Schema, model, Model } from "mongoose";
import bcrypt from "bcrypt";

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

userSchema.pre("save", async function (next: CallableFunction): Promise<void> {
	if (!this.isModified("password")) {
		next();
	}

	const salt: string = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const UserModel: Model<IUser> = model("Users", userSchema);

export default UserModel;
