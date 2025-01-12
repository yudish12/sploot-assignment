import { Document } from "mongoose";

interface UserType extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  user_type: "company" | "user";
  matchPasswords: (enteredPassword: string) => Promise<boolean>;
  generateJWT: (_id: string) => string;
}

export default UserType;
