import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils";
import { loginValidator } from "../../validations/authentication";
import Users from "../../models/user";
import { throwAppError } from "../../utils/AppError";

//test user

// "email":"yudish@test.com",
//   "password": "Test@123",

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    const validate = await loginValidator(body.email, body.password);

    if (!validate.valid) {
      return next(
        throwAppError(validate.code, "AUTH", validate.status, validate.field)
      );
    }

    const user = await Users.findOne({ email: body.email });

    if (!user) {
      return next(throwAppError("INCORRECT_EMAIL", "AUTH", 400, "email"));
    }

    if (await user.matchPasswords(req.body.password)) {
      const token = user.generateJWT(user._id.toString());
      const user_data = user.toJSON();
      return res.status(200).json({
        success: true,
        data: { ...user_data, token },
      });
    }

    return next(throwAppError("INCORRECT_PASSWORD", "AUTH", 400, "password"));
  }
);
