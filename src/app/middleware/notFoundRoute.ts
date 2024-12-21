/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

const notFoundRoute = (req: Request, res: Response, next: NextFunction) => {
    const statusCode = 404;
    res.status(statusCode).json({
        success: false,
        message: "Route not found",

    });
};

export default notFoundRoute;
