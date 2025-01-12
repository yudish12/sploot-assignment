import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils";
import Categories from "../../models/categories";

export const getCategories = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await Categories.find();
    console.log(data);
    return res.status(200).json({
      success: true,
      data,
    });
  }
);
