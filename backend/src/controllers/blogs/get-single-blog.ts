import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils";
import { throwAppError } from "../../utils/AppError";
import Blogs from "../../models/blog";

export const getSingleBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    if (!id) {
      return throwAppError("MISSING_BLOG_ID", "BLOGS", 400, "id");
    }

    console.log(id);

    const data = await Blogs.findById(id).populate("created_by");

    return res.status(200).json({
      success: true,
      data: data?.toJSON(),
    });
  }
);
