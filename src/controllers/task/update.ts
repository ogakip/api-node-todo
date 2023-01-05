import { Request, Response } from "express"
import { updateTaskService } from "../../services/task/update"

export const updateTaskController = async (req: Request, res: Response) => {
    const { id } = req.params

    const resultService = await updateTaskService(req.body, res.locals.user_id, id)

    return res.json(resultService)
}