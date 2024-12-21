import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { blogValidationSchema } from "./blog.validation";
import { blogController } from "./blog.controller";
import { authorizedRole } from "../../middleware/auth";
import { UserRole } from "../user/user.constant";


const router = Router()

// POST /blogs - Create a new blog

router.post("/", validateRequest(blogValidationSchema), authorizedRole(UserRole.user), blogController.createBlog);

export const blogRoutes = router;