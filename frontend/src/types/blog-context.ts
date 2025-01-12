import { BlogType, CategoryType, UserType } from "./globals";

export interface BlogsState {
  categories: CategoryType[] | [];
  blogs: BlogType[] | [];
  current_blog: BlogType | null | string;
  current_category: CategoryType | null | string;
}

export type BlogActions =
  | {
      type: "SET_CATEGORIES";
      payload: { categories: CategoryType[] };
    }
  | {
      type: "SET_BLOGS";
      payload: { blogs: BlogType[] };
    }
  | {
      type: "SET_CURRENT_BLOG";
      payload: { blog: BlogType | string | null };
    }
  | {
      type: "SET_CURRENT_CATEGORY";
      payload: { category: CategoryType | string };
    };
