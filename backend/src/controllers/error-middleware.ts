import { NextFunction, Request, RequestHandler, Response } from "express";

const err_func = (err: any, req: Request, res: Response, next: any) => {
  console.log(err);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (err.code === 11000) {
    const str = JSON.stringify(err.keyValue);
    return res.status(err.statusCode).json({
      status: err.status,
      message: `Duplicated key value pair found ${str}`,
      obj: err.keyValue,
    });
  }

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default err_func as unknown as RequestHandler;
