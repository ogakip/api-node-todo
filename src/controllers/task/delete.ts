import { Request, Response } from "express"
import { deleteTaskService } from "../../services/task/delete"

export const deleteTaskController = async (req: Request, res: Response) => {
    const { id } = req.params

    await deleteTaskService(res.locals.user_id, id)

    return res.status(204).send()
}