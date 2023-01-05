import { updateTaskSchema } from './../validations/todo';
import { Router } from "express";

import { createTaskController } from "../controllers/task/create";
import { readTasksController } from './../controllers/task/read';
import { updateTaskController } from "../controllers/task/update";
import { deleteTaskController } from '../controllers/task/delete';

import { verifyToken } from "../middlewares/tokenAuth";
import { schemaValidation } from "../middlewares/schemaValidation";

import { createTaskSchema } from "../validations/todo";

export const TaskRoutes = Router()

TaskRoutes.post("/", verifyToken, schemaValidation(createTaskSchema), createTaskController)
TaskRoutes.get("/", verifyToken, readTasksController)
TaskRoutes.patch("/:id", verifyToken, schemaValidation(updateTaskSchema), updateTaskController)
TaskRoutes.delete("/:id", verifyToken, deleteTaskController)