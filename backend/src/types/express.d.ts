import UserType from "./schema-types/user-schema-types";

declare global {
  namespace Express {
    interface Request {
      user?: UserType;
    }
  }
}

export {};
