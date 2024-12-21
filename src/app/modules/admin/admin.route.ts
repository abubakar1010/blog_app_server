import { Router } from "express";
import { authorizedRole } from "../../middleware/auth";
import { UserRole } from "../user/user.constant";
import { adminController } from "./admin.controller";


const router = Router();

// PATCH /admin/:id - Block a user

router.patch("/:id", authorizedRole(UserRole.admin), adminController.blockUser);

export const AdminRoutes = router;
