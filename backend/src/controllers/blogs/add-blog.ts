import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils";
import { addBlogValidator } from "../../validations/blogs";
import { throwAppError } from "../../utils/AppError";
import Blogs from "../../models/blog";
import {
  getCloudinaryInstance,
  uploadImageToCloudinary,
} from "../../services/cloudinary";

export const addBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    console.log(body);

    const validate = await addBlogValidator(
      body.title,
      body.description,
      body.link,
      body.category
    );

    if (!validate.valid) {
      return next(
        throwAppError(validate.code, "BLOGS", validate.status, validate.field)
      );
    }

    const cloudinaryInstance = getCloudinaryInstance(
      process.env.CLOUDINARY_NAME!,
      process.env.CLOUDINARY_API_KEY!,
      process.env.CLOUDINARY_API_SECRET!
    );

    const imageUrl = await uploadImageToCloudinary(
      cloudinaryInstance,
      req.file
    );

    const data = await Blogs.create({
      title: body.title,
      description: body.description,
      link: body.link,
      category: body.category,
      created_by: req.user?._id,
      image: imageUrl ?? "",
    });

    return res.status(200).json({
      success: true,
      data: data,
    });
  }
);
