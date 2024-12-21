import { Schema } from "mongoose";
import { TBlog } from "./blog.interface";
import { model } from "mongoose";

const blogSchema = new Schema<TBlog>(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		author: {
			type: Schema.Types.ObjectId,
            ref: "User",
			required: true,
		},
        
		isPublished: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);


export const Blog = model<TBlog>("Blog", blogSchema);
