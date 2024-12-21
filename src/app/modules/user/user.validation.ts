import { z } from "zod";

const userValidationSchema = z.object({
	body: z.object({
		name: z.string().nonempty({ message: "name is required" }),
		email: z.string().email({ message: "email is required" }),
		password: z.string().nonempty({ message: "password is required" }),
	}),
});

export {
    userValidationSchema
}