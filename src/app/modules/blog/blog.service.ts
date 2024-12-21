import ApiError from "../../utils/ApiError";
import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlog = async (blogContent: TBlog) => {
	const { title, author } = blogContent;

	// check blog already exist or not

	const blog = await Blog.findOne({ $or: [{ title }, { author }] });

	// if blog already exist throw error

	if (blog) throw new ApiError(400, "Blog already exist");

	const result = await Blog.create(blogContent);

	return result;
};

const updateBlog = async (blogId: string, updateContent: Partial<TBlog>) => {
	// check blog already exist or not

	const blog = await Blog.findById(blogId);

	// if blog not exist throw error

	if (!blog) throw new ApiError(404, "Blog not found");

	const result = await Blog.findByIdAndUpdate(blogId, updateContent, {
		new: true,
	});

	// check if result is empty

	if (!result) throw new ApiError(400, "failed to update blog");

	return result;
};

export const blogService = { createBlog, updateBlog };
