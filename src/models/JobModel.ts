import { Schema, model } from "mongoose";

interface IJob {
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements: {
        content: string;
        items: Array<string>;
    };
    role: {
        content: string;
        items: Array<string>;
    };
}

const jobSchema = new Schema<IJob>({
    company: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
    logoBackground: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    postedAt: {
        type: String,
        required: true,
    },
    contract: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    apply: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requirements: {
        content: {
            type: String,
            required: true,
        },
        items: [
            {
                type: String,
                required: true,
            },
        ],
    },
    role: {
        content: {
            type: String,
            required: true,
        },
        items: [
            {
                type: String,
                required: true,
            },
        ],
    },
});

const JobModel = model<IJob>("Jobs", jobSchema);

export default JobModel;
