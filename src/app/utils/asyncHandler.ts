import { RequestHandler } from 'express';

export const asyncHandler = (requestHandler: RequestHandler) => {
    const handlePromise: RequestHandler = (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) =>
            next(error),
        );
    };

    return handlePromise;
};
