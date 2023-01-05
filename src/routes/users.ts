import { Router } from "express";

import { schemaValidation } from "../middlewares/schemaValidation";
import { verifyToken } from './../middlewares/tokenAuth';

import { createUserController } from "../controllers/users/create";
import { loginUserController } from './../controllers/users/login';
import { deleteUserController } from '../controllers/users/delete';


import { createUserSchema } from "../validations/users";
import { loginUserSchema } from './../validations/users';

export const UserRoutes = Router()

UserRoutes.post("/", schemaValidation(createUserSchema), createUserController)
UserRoutes.post("/login", schemaValidation(loginUserSchema), loginUserController)
UserRoutes.delete("/", verifyToken, deleteUserController)