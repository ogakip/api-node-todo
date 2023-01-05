import { Request, Response } from "express";
import { deleteUserService } from "../../services/users/delete";

export const deleteUserController = async (req: Request, res: Response) => {
    const resultService = await deleteUserService(res.locals.user_id)
    console.log(res.locals.user_id)

    return res.status(204).send()
}