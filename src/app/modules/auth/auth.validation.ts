import e from "express";
import { z } from "zod";

const authValidationSchema = z.object({
	body: z.object({
		email: z.string().email({ message: "email is required" }),
		password: z.string().nonempty({ message: "password is required" }),
	}),
});

export {
    authValidationSchema
}