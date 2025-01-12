import { Router } from "express";
import AuthRouter from "./authentication/auth";
import BlogsRouter from "./blogs/blogs";

function getRoutes(router: Router) {
  AuthRouter("/auth", router);
  BlogsRouter("/blogs", router);
  return router;
}

export default getRoutes;
