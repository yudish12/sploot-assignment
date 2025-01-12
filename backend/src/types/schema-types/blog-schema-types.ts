import { Document } from "mongoose";
import CategoriesType from "./categories-schema-types";
import UserType from "./user-schema-types";

export default interface BlogType extends Document {
  title: string;
  category: string | CategoriesType;
  description: string;
  created_by: string | UserType;
  image: string;
  link: string;
}
