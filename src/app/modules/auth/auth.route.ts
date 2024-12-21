import { Router } from "express";
import { authController } from "./auth.controller";
import { userValidationSchema } from "../user/user.validation";
import validateRequest from "../../middleware/validateRequest";
import { authValidationSchema } from "./auth.validation";



const router = Router()

router.post("/register",validateRequest(userValidationSchema),authController.registerUSer);

router.post("/login", validateRequest(authValidationSchema), authController.loginUser)
export const authRoutes = router;