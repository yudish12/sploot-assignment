import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils";

export const getUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    return res.status(200).json({
      success: true,
      data: user,
    });
  }
);
