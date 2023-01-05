import { Request, Response } from "express";
import { createTaskService } from "../../services/task/create";

export const createTaskController = async (req: Request, res: Response) => {
    const resultService = await createTaskService(req.body, res.locals.user_id)

    return res.status(201).json(resultService)
}