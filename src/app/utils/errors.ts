/* eslint-disable @typescript-eslint/no-explicit-any */
import { Error } from "mongoose";
import { TErrorSource } from "../interface/error.interface";
import { TGenericErrorResponse } from "../interface/error.interface";
import { ZodError, ZodIssue } from "zod";

const handleZodError = (error: ZodError): TGenericErrorResponse => {
	const statusCode = 400;
	const message = "Zod validation Error";

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

const handleValidationError = (
	error: Error.ValidationError
): TGenericErrorResponse => {
	const message = "Validation Error";
	const statusCode = 400;
	const errorSource: TErrorSource = Object.values(error.errors).map(
		(value: Error.ValidatorError | Error.CastError) => {
			return {
				path: value?.path,
				message: value?.message,
			};
		}
	);

	return {
		message,
		statusCode,
		errorSource,
	};
};

const handleCastError = (error: Error.CastError): TGenericErrorResponse => {
	const message = "Cast Error";
	const statusCode = 400;
	const errorSource: TErrorSource = [
		{
			path: error.path,
			message: error.message,
		},
	];

	return {
		message,
		statusCode,
		errorSource,
	};
};

const handleDuplicityError = (error: any): TGenericErrorResponse => {
	const message = "Duplicity error";
	const statusCode = 400;
	const errorSource: TErrorSource = [
		{
			path: Object.keys(error.keyValue)[0],
			message: `${error.keyValue[Object.keys(error.keyValue)[0]]} already exist`,
		},
	];

	return {
		message,
		statusCode,
		errorSource,
	};
};

export {
	handleZodError,
	handleValidationError,
	handleCastError,
	handleDuplicityError,
};
