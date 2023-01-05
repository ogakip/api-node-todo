import { Request, Response } from "express";
import { loginUserService } from "../../services/users/login";

export const loginUserController = async (req: Request, res: Response) => {
    const resultService = await loginUserService(req.body)

    return res.json(resultService)
}