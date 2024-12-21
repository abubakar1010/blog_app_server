/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ErrorRequestHandler, NextFunction } from "express";
import { TErrorSource } from "../interface/error.interface";
import { ZodError } from "zod";
import { handleCastError, handleDuplicityError, handleValidationError, handleZodError } from "../utils/errors";
import ApiError from "../utils/ApiError";




const globalErrorHandler: ErrorRequestHandler = (
    error,
    req,
    res,
    next: NextFunction,
) => {
    let statusCode = error.statusCode || 500;
    let message = error.message || 'something went wrong';
    let errorSource: TErrorSource = [
        {
            path: '',
            message: 'Something went wrong',
        },
    ];
    if (error instanceof ZodError) {
        const zodErrorInfo = handleZodError(error);
        statusCode = zodErrorInfo.statusCode;
        message = zodErrorInfo.message;
        errorSource = zodErrorInfo.errorSource;
    }else if(error.name === "ValidationError"){
        const mongooseValidationError = handleValidationError(error)
        statusCode = mongooseValidationError.statusCode;
        message = mongooseValidationError.message;
        errorSource = mongooseValidationError.errorSource;
    }else if(error.name === "CastError"){
        const castError = handleCastError(error)
        statusCode = castError.statusCode;
        message = castError.message;
        errorSource = castError.errorSource;
    }
    else if(error.code === 11000){
        const duplicityError = handleDuplicityError(error)
        statusCode = duplicityError.statusCode;
        message = duplicityError.message;
        errorSource = duplicityError.errorSource;
    }
    else if(error instanceof ApiError){
        statusCode = error.statusCode;
        message = error.message;
        errorSource = [
            {
                path: "",
                message: error.message
            }
        ];
    }
    else if(error instanceof Error){
        message = error.message;
        errorSource = [
            {
                path: "",
                message: error.message
            }
        ];
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorSource,
        error,
        stack: error.stack,
    });
};

export default globalErrorHandler;
