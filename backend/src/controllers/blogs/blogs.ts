import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils";
import Blogs from "../../models/blog";
import { throwAppError } from "../../utils/AppError";
import { categoryValidator } from "../../validations/blogs/category";

export const getBlogs = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;

    const categoryid = query.categoryid as string;

    if (!categoryid) {
      const data = await Blogs.find().populate("created_by");
      return res.status(200).json({
        success: true,
        data,
      });
    }

    const validate = await categoryValidator(categoryid);

    if (!validate.valid) {
      return next(
        throwAppError(validate.code, "BLOGS", validate.status, validate.field)
      );
    }

    const data = await Blogs.find({ category: categoryid }).populate(
      "created_by"
    );
    console.log(data);
    return res.status(200).json({
      success: true,
      data,
    });
  }
);
