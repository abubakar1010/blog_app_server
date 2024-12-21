import { Router } from "express";
import { authController } from "./auth.controller";
import { userValidationSchema } from "../user/user.validation";
import validateRequest from "../../middleware/validateRequest";
import { authValidationSchema } from "./auth.validation";

const router = Router();

// POST /auth/register - Register a new user

router.post(
	"/register",
	validateRequest(userValidationSchema),
	authController.registerUSer
);

// POST /auth/login - Login user

router.post(
	"/login",
	validateRequest(authValidationSchema),
	authController.loginUser
);
export const authRoutes = router;
