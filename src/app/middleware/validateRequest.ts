import { RequestHandler } from "express";
import { AnyZodObject } from "zod";
import { asyncHandler } from "../utils/asyncHandler";

const validateRequest = (schema: AnyZodObject) => {
	const schemaValidator: RequestHandler = asyncHandler(
		async (req, res, next) => {
			await schema.parseAsync({
				body: req.body,
			});
			next();
		}
	);
	return schemaValidator;
};

export default validateRequest;
