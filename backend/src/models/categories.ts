import { Schema, model } from "mongoose";
import CategoriesType from "../types/schema-types/categories-schema-types";

const CategoriesSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Categories = model<CategoriesType>("Categories", CategoriesSchema);

export default Categories;
