import { Request, Response, NextFunction } from "express";
import { nextTick } from "process";
import { AppError } from "../errors/appError";

export const handleAppErrorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  const formatedError = (message: string) => {
    let formatedMessage = message.charAt(0).toUpperCase() + message.slice(1);

    if (formatedMessage[formatedMessage.length - 1] === ".") {
      return formatedMessage.slice(0, formatedMessage.length - 1);
    }

    return formatedMessage;
  };

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      error: formatedError(error.message),
    });
  }

  if (error instanceof Error) {
    return res.status(400).json({
      error: formatedError(error.message),
    });
  }

  next(error)
};
