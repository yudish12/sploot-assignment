const AUTH = {
  MISSING_EMAIL: "Please enter your email",
  MISSING_PASSWORD: "Please enter your password",
  INVALID_EMAIL: "Invalid email",
  INVALID_PASSWORD: "Invalid password",
  INVALID_TOKEN: "Invalid token",
  TOKEN_EXPIRED: "Token expired",
  MISSING_TOKEN: "No token provided",
  MISSING_NAME: "Please enter your name",
  INCORRECT_EMAIL: "Incorrect Email",
  INCORRECT_PASSWORD: "Incorrect Password",
  USER_NOT_FOUND: "User not found",
  USER_ALREADY_EXISTS: "User already exists",
};

const BLOGS = {
  CATEGORY_ID_MISSING: "Please provide a category id",
  TITLE_MISSING: "Please provide a title",
  CATEGORY_NOT_FOUND: "Category not found",
  DESCRIPTION_MISSING: "Please provide a description",
  LINK_MISSING: "Please provide a link",
  MISSING_BLOG_ID: "Please provide a blog id",
  LINK_INVALID: "Please provide a valid link",
};

export const ERROR_CODES: Record<string, any> = {
  AUTH,
  BLOGS,
};
