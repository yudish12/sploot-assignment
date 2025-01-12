import { BlogActions, BlogsState } from "@/types/blog-context";

export const initialState: BlogsState = {
  categories: [],
  blogs: [],
  current_blog: null,
  current_category: null,
};

export function blogReducer(
  state: BlogsState,
  action: BlogActions
): BlogsState {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload.categories,
      };
    case "SET_BLOGS":
      return {
        ...state,
        blogs: action.payload.blogs,
      };
    case "SET_CURRENT_BLOG":
      return {
        ...state,
        current_blog: action.payload.blog,
      };
    case "SET_CURRENT_CATEGORY":
      return {
        ...state,
        current_category: action.payload.category,
      };
    default:
      return state;
  }
}
