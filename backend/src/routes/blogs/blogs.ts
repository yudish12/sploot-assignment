import { Response, Request, Router } from "express";
import { BlogsController } from "../../controllers/blogs";
import { upload } from "../../services/multer";
import { AuthMiddleware } from "../../controllers/authentication/middlewares";

const BlogsRouter = (API_PREFIX: string, router: Router) => {
  router.get(`${API_PREFIX}/categories`, BlogsController.getCategories);
  router.get(`${API_PREFIX}/fetch`, BlogsController.getBlogs);
  router.get(`${API_PREFIX}/fetch/:id`, BlogsController.getSingleBlog);
  router.post(
    `${API_PREFIX}/add`,
    upload.single("image"),
    AuthMiddleware.verifyToken,
    BlogsController.addBlog
  );
  return router;
};

export default BlogsRouter;
