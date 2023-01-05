import { AppError } from './../../errors/appError';
import { iUpdateTask } from './../../interfaces/tasks/index';
import appDataSource from "../../data-source";
import { User } from "../../entities/users";
import { Todo } from "../../entities/todo";

export const updateTaskService = async (data: iUpdateTask, user_id: string, task_id: string) => {
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

    const updatedTask = await getTodoRepo.update(task_id, data)

    return updatedTask
}