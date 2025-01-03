import { z } from "zod";

//
const blogValidationSchema = z.object({
	body: z.object({
		title: z.string().nonempty({ message: "title is required" }),
		content: z.string().nonempty({ message: "content is required" }),
	}),
});

const blogUpdateValidationSchema = z.object({
	body: z.object({
		title: z.string().optional(),
		content: z.string().optional(),
	}),
});

export { blogValidationSchema, blogUpdateValidationSchema };
