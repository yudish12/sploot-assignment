import { addBlog } from "./add-blog";
import { getBlogs } from "./blogs";
import { getCategories } from "./categories";
import { getSingleBlog } from "./get-single-blog";

export const BlogsController = {
  getCategories,
  getBlogs,
  addBlog,
  getSingleBlog,
};
