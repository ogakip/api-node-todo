import express from "express";
import "express-async-errors"
import { UserRoutes } from './routes/users';
import { handleAppErrorMiddleware } from "./middlewares/handleAppError";
import { TaskRoutes } from "./routes/todos";

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", UserRoutes)
app.use("/task", TaskRoutes)
app.use(handleAppErrorMiddleware);

export default app;
