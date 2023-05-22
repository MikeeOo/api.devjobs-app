import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    user: String,
});

const TestModel = mongoose.model("Users", testSchema);

export default TestModel;
