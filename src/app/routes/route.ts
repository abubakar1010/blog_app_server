import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.route";
import { blogRoutes } from "../modules/blog/blog.route";
import { AdminRoutes } from "../modules/admin/admin.route";


const router = Router()

const routesInfo = [
    {
        path: "/auth",
        route: authRoutes
    },
    {
        path: "/blogs",
        route: blogRoutes
    },
    {
        path: "/admin",
        route: AdminRoutes
    }
]

routesInfo.forEach( route => router.use(route.path, route.route))

export default router