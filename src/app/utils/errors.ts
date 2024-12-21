import { TErrorSource } from "../interface/error.interface";
import { TGenericErrorResponse } from "../interface/error.interface";
import { ZodError, ZodIssue } from "zod";

export const handleZodError = (error: ZodError): TGenericErrorResponse => {
    const statusCode = 400;
    const message = 'Zod validation Error';

    const errorSource: TErrorSource = error.issues.map((issue: ZodIssue) => {
        return {
            path: issue?.path[issue.path.length - 1],
            message: issue.message,
        };
    });

    return {
        statusCode,
        message,
        errorSource,
    };
};