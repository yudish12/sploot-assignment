import { Response, Request, Router } from "express";
import { AuthController } from "../../controllers/authentication";
import { AuthMiddleware } from "../../controllers/authentication/middlewares";

const AuthRouter = (API_PREFIX: string, router: Router) => {
  router.post(`${API_PREFIX}/login`, AuthController.login);

  router.post(`${API_PREFIX}/signup`, AuthController.signup);

  router.get(
    `${API_PREFIX}/user`,
    AuthMiddleware.verifyToken,
    AuthController.getUser
  );

  return router;
};

export default AuthRouter;
