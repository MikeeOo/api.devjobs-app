import { Schema, model } from "mongoose";

interface IUser {
    email: string;
    password: string;
}

const userSchema = new Schema<IUser>({
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
});

const UserModel = model<IUser>("Users", userSchema);

export default UserModel;
