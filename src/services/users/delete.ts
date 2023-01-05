import { AppError } from './../../errors/appError';
import appDataSource from "../../data-source";
import { User } from "../../entities/users";

export const deleteUserService = async (user_id: string) => {
    console.log(user_id)

    const getUserRepo = appDataSource.getRepository(User)
    const verifyIfUserExists = await getUserRepo.findOneBy({ id: user_id })

    if(!verifyIfUserExists) {
        throw new AppError("Usuário não encontrado")
    }

    await getUserRepo.delete(user_id)

    return "OK"
}