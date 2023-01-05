import { Request, Response } from 'express';
import app from "./app";
import appDataSource from "./data-source";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError";

export const init = async () => {
    const PORT = process.env.PORT ? process.env.PORT : 3333

    await appDataSource.initialize()
        .then(() => {
            console.log(`CONNECTION STABLISHED WITH DATABASE`);
        })
        .catch((error: any) => {
            console.log(error);
        });

    app.listen(PORT, () => {
        console.log(`Application running on port: ${PORT}`);
    });
}
init()