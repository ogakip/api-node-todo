import appDataSource from "../../data-source";
import { User } from "../../entities/users";
import { Todo } from "../../entities/todo";
import { AppError } from "../../errors/appError";

export const deleteTaskService = async (user_id: string, task_id: string) => {
    const getUserRepo = appDataSource.getRepository(User)
    const getTodoRepo = appDataSource.getRepository(Todo)
    const verifyIfUserExists = await getUserRepo.findOneBy({id: user_id})
    const verifyIfTodoExists = await getTodoRepo.findOneBy({id: task_id})

    if (!verifyIfUserExists) {
        throw new AppError("Usuário não encontrado")
    }

    if (!verifyIfTodoExists) {
        throw new AppError("Tarefa não encontrada")
    }

    if (verifyIfTodoExists.user.id !== verifyIfUserExists.id) {
        throw new AppError("Esta tarefa não é sua")
    }

    await getTodoRepo.delete(task_id)

    return "OK"
}