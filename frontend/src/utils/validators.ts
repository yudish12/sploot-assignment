import { isValidEmail, isValidLink, isValidPassword } from ".";

export const loginValidator = (email: string, password: string) => {
  if (!email) return { valid: false, message: "Please enter your email" };
  if (!password) return { valid: false, message: "Please enter your password" };

  if (!isValidEmail(email))
    return { valid: false, message: "Please enter a valid email" };
  if (!isValidPassword(password))
    return { valid: false, message: "Please enter a valid password" };

  return { valid: true, message: "" };
};

export const addBlogValidator = (
  title: string,
  description: string,
  link: string,
  category: string
) => {
  if (!title) return { valid: false, message: "Please enter a title" };
  if (!description)
    return { valid: false, message: "Please enter a description" };
  if (!link) return { valid: false, message: "Please enter a link" };
  if (!category) return { valid: false, message: "Please select a category" };

  if (!isValidLink(link))
    return { valid: false, message: "Please enter a valid link" };

  return { valid: true, message: "" };
};
