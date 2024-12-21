import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { blogUpdateValidationSchema, blogValidationSchema } from "./blog.validation";
import { blogController } from "./blog.controller";
import { authorizedRole } from "../../middleware/auth";
import { UserRole } from "../user/user.constant";


const router = Router()

// POST /blogs - Create a new blog

router.post("/", validateRequest(blogValidationSchema), authorizedRole(UserRole.user), blogController.createBlog);

// GET /blogs - Get all blogs

router.patch("/:id", validateRequest(blogUpdateValidationSchema), authorizedRole(UserRole.user), blogController.updateBlog);

// DELETE /blogs/:id - Delete a blog

router.delete("/:id", authorizedRole(UserRole.user), blogController.deleteBlog);

export const blogRoutes = router;