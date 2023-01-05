import { iCreateTask, iReturnCreateTask } from './../../interfaces/tasks/index';
import { AppError } from './../../errors/appError';
import appDataSource from "../../data-source";
import { Todo } from "../../entities/todo";
import { User } from "../../entities/users";

export const createTaskService = async (data: iCreateTask, user_id: string): Promise<iReturnCreateTask> => {
    const getUserRepo = appDataSource.getRepository(User)
    const getTodoRepo = appDataSource.getRepository(Todo)
    const verifyIfUserExists = await getUserRepo.findOneBy({id: user_id})

    if (!verifyIfUserExists) {
        throw new AppError("Usuário não encontrado")
    }

    const insertTask = await getTodoRepo.save({
        title: data.title,
        description: data.description,
        user: {
            id: verifyIfUserExists.id,
            email: verifyIfUserExists.email
        }
    })

    return insertTask
}