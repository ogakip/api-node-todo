import { Request, Response } from "express";
import { readTasksService } from "../../services/task/read";

export const readTasksController = async (req: Request, res: Response) => {
    const resultService = await readTasksService(res.locals.user_id)

    return res.json(resultService)
}