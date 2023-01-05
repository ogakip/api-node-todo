import { AppError } from './../../errors/appError';
import { iCreateUser, iReturnCreateUser } from './../../interfaces/users/index';
import appDataSource from "../../data-source";
import { User } from "../../entities/users";
import { hash } from 'bcrypt';

export const createUserService = async (data: iCreateUser): Promise<iReturnCreateUser> => {
    const getUserRepo = appDataSource.getRepository(User)
    const verifyIfUserAlreadyExists = await getUserRepo.findOneBy({ email: data.email })

    if (verifyIfUserAlreadyExists) {
        throw new AppError("Usuário já cadastrado")
    }

    const hashedPassword = await hash(data.password, 10)

    const insertUser = await getUserRepo.save({
        email: data.email,
        password: hashedPassword
    })

    return {
        id: insertUser.id,
        email: insertUser.email
    }
}