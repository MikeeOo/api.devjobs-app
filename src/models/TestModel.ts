import { Schema, model } from "mongoose";

interface ITest {
    user: string;
}

const testSchema = new Schema<ITest>({
    user: String,
});

const TestModel = model<ITest>("Users", testSchema);

export default TestModel;
