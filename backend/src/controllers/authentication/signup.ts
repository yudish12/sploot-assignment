import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils";
import { signupValidator } from "../../validations/authentication";
import Users from "../../models/user";
import { throwAppError } from "../../utils/AppError";

export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const validate = await signupValidator(
      body.email,
      body.password,
      body.name
    );

    console.log(validate);

    if (!validate.valid) {
      return next(
        throwAppError(validate.code, "AUTH", validate.status, validate.field)
      );
    }

    const user = await Users.create({
      name: body.name,
      email: body.email,
      password: body.password,
    });

    return res.status(200).json({
      success: true,
      data: user,
    });
  }
);
