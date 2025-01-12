import jwt from "jsonwebtoken";
import { isValidEmail, isValidPassword } from "../../utils";
import Users from "../../models/user";

export const loginValidator = async (email: string, password: string) => {
  if (!email)
    return {
      valid: false,
      code: "MISSING_EMAIL",
      field: "email",
      status: 400,
    };
  if (!password)
    return {
      valid: false,
      code: "MISSING_PASSWORD",
      field: "password",
      status: 400,
    };

  if (!isValidEmail(email))
    return {
      valid: false,
      code: "INVALID_EMAIL",
      status: 400,
      field: "email",
    };
  if (!isValidPassword(password))
    return {
      valid: false,
      code: "INVALID_PASSWORD",
      status: 400,
      field: "password",
    };

  return { valid: true, code: "SUCCESS", message: "" };
};

export const signupValidator = async (
  email: string,
  password: string,
  name: string
) => {
  if (!email)
    return {
      valid: false,
      code: "MISSING_EMAIL",
      field: "email",
      status: 400,
    };
  if (!password)
    return {
      valid: false,
      code: "MISSING_PASSWORD",
      field: "password",
      status: 400,
    };
  if (!name)
    return {
      valid: false,
      code: "MISSING_NAME",
      field: "name",
      status: 400,
    };

  if (!isValidEmail(email))
    return {
      valid: false,
      code: "INVALID_EMAIL",
      status: 400,
      field: "email",
    };
  if (!isValidPassword(password))
    return {
      valid: false,
      code: "INVALID_PASSWORD",
      status: 400,
      field: "password",
    };

  const user = await Users.findOne({ email });
  if (user) {
    return {
      valid: false,
      code: "USER_ALREADY_EXISTS",
      status: 400,
      field: "toast",
    };
  }

  return { valid: true, code: "SUCCESS", status: 200 };
};

export const validateJWT = async (token: string) => {
  try {
    const decoded = (await jwt.verify(token, process.env.JWT_SECRET!)) as {
      _id: string;
      exp: number;
    };

    console.log(decoded);

    if (decoded.exp < Date.now() / 1000) {
      return {
        valid: false,
        code: "TOKEN_EXPIRED",
        status: 403,
        field: "toast",
      };
    }

    const user = await Users.findOne({ _id: decoded._id });

    if (!user) {
      return {
        valid: false,
        code: "INVALID_TOKEN",
        status: 403,
        field: "toast",
      };
    }

    return { valid: true, code: "SUCCESS", status: 200, data: user };
  } catch (error) {
    console.log(error, 125);
    return {
      valid: false,
      code: "INVALID_TOKEN",
      status: 403,
      field: "toast",
    };
  }
};
