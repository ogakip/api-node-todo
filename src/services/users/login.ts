import appDataSource from "../../data-source";
import { User } from "../../entities/users";
import { AppError } from "../../errors/appError";
import { iLoginUser, iReturnLoginUser } from "../../interfaces/users";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken"

export const loginUserService = async (data: iLoginUser): Promise<iReturnLoginUser> => {
    const getUserRepo = appDataSource.getRepository(User)
    const verifyIfUserExists = await getUserRepo.findOneBy({email: data.email})

    if (!verifyIfUserExists) {
        throw new AppError("Usuário não encontrado")
    }

    const verifyPassword = await compare(data.password, verifyIfUserExists.password)
    
    if (!verifyPassword) {
        throw new AppError("Senha incorreta")
    }

    const accessToken = jwt.sign({ user_id: verifyIfUserExists.id }, 'SECRET_KEY', {
        expiresIn: "24h"
    });

    return {
        accessToken
    }
}