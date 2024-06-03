import { Router } from "express";
import userAuthenticationController from "../../auth/index.js";
import userAuthMiddleWare from "../../middleware/index.js";
import AuthValidator from "../../validator/auth/index.js";
const userAuthenticationRouter = Router();

userAuthenticationRouter.post("/auth/signUp",userAuthMiddleWare,userAuthenticationController.SignUp);

// userAuthenticationRouter.post("/auth/LogIn",AuthValidator,userAuthenticationController.LogIn);
userAuthenticationRouter.post("/auth/LogIn",AuthValidator.LogIn,userAuthenticationController.LogIn)

export default userAuthenticationRouter;