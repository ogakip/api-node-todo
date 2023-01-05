import { AppError } from './../../errors/appError';
import appDataSource from "../../data-source";
import { User } from "../../entities/users";
import { Todo } from "../../entities/todo";

export const readTasksService = async (user_id: string) => {
    const getUserRepo = appDataSource.getRepository(User)
    const getTodoRepo = appDataSource.getRepository(Todo)
    const verifyIfUserExists = await getUserRepo.findOneBy({id: user_id})

    if (!verifyIfUserExists) {
        throw new AppError("Usuário não encontrado")
    }

    const getUserTask = await getTodoRepo.find({
        where: {
            user: verifyIfUserExists
        }
    })

    console.log(verifyIfUserExists)
    console.log(getUserTask)

    return getUserTask.map((todo) => {
        return {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            its_complete: todo.its_complete,
            user_id: todo.user.id
        }
    })
}