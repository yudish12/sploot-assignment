import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../../../utils";
import { throwAppError } from "../../../utils/AppError";
import { validateJWT } from "../../../validations/authentication";

declare module "express" {
  interface Request {
    user?: any; // or use your UserType if preferred
  }
}

export const verifyToken = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      return next(throwAppError("MISSING_TOKEN", "AUTH", 401, "toast"));
    }

    const jwt = token.split(" ")[1];

    const validateJwt = await validateJWT(jwt);

    if (!validateJwt.valid) {
      return next(
        throwAppError(
          validateJwt.code,
          "AUTH",
          validateJwt.status,
          validateJwt.field
        )
      );
    }
    req.user = validateJwt.data;
    next();
  }
);
