import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { authRoutes } from "../modules/auth/auth.route";


const router = Router()

const routesInfo = [
    {
        path: "/auth",
        route: authRoutes
    }
]

routesInfo.forEach( route => router.use(route.path, route.route))

export default router