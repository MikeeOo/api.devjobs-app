import { Request, Response } from "express";
import JobModel from "../models/JobModel";

export default class JobsController {
    static getAll = async (req: Request, res: Response): Promise<void> => {
        res.json(await JobModel.find());
    };

    static getById = async (req: Request, res: Response): Promise<void> => {
        try {
            res.json(await JobModel.findById(req.params.id));
        } catch (e) {
            res.json({
                error: "The post doesn't exist",
            });
        }
    };

    static add = async (req: Request, res: Response): Promise<void> => {
        try {
            await new JobModel({
                company: req.body.company,
                logo: req.body.logo,
                logoBackground: req.body.logoBackground,
                position: req.body.position,
                postedAt: req.body.postedAt,
                contract: req.body.contract,
                location: req.body.location,
                website: req.body.website,
                apply: req.body.apply,
                description: req.body.description,
                requirements: {
                    content: req.body.requirements.content,
                    items: req.body.requirements.items,
                },
                role: {
                    content: req.body.role.content,
                    items: req.body.role.items,
                },
            }).save();
            res.json({
                status: "Created",
            });
        } catch (e) {
            res.json({ message: e, status: 409 });
        }
    };
}
