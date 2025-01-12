import { ERROR_CODES } from "../config/error";

export default class AppError extends Error {
  public statusCode = 500;
  public isOperational = false;
  public field = "toast";
  public code = "ERROR";

  constructor(message: string, statusCode?: number, field?: string) {
    super(message); //calls constructor of Error class to create error object with message string

    this.statusCode = statusCode ?? 500;
    this.isOperational = true;
    this.field = field ?? "toast";
    Error.captureStackTrace(this, this.constructor);
  }
}

export const throwAppError = (
  code: string,
  type: string,
  statusCode?: number,
  field?: string
) => {
  const message = ERROR_CODES[type][code];
  return new AppError(message, statusCode, field);
};
