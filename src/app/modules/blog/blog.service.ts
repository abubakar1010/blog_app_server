import QueryBuilder from "../../builder/queryBuilder";
import ApiError from "../../utils/ApiError";
import { TUser } from "../user/user.interface";
import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlog = async (blogContent: TBlog) => {
	const { title, author } = blogContent;

	// check blog already exist or not

	const blog = await Blog.findOne({ $and: [{ title }, { author }] });

	// if blog already exist throw error

	if (blog) throw new ApiError(400, "Blog already exist");

	const result = await Blog.create(blogContent);

	return result;
};

const updateBlog = async (
	blogId: string,
	updateContent: Partial<TBlog>,
	userEmail: string
) => {
	// check blog already exist or not

	const blog = await Blog.findById(blogId).populate("author");

	// if blog not exist throw error

	if (!blog) throw new ApiError(404, "Blog not found");

	// check if user is author of blog

	const { email } = blog.author as Partial<TUser>;

	if (userEmail !== email) {
		throw new ApiError(401, "You are not author of this blog");
	}

	const result = await Blog.findByIdAndUpdate(blogId, updateContent, {
		new: true,
	});

	// check if result is empty

	if (!result) throw new ApiError(400, "failed to update blog");

	return result;
};

const deleteBlog = async (blogId: string, userEmail: string) => {
	// check blog already exist or not

	const blog = await Blog.findById(blogId).populate("author");

	// if blog not exist throw error

	if (!blog) throw new ApiError(404, "Blog not found");

	const { email } = blog.author as Partial<TUser>;

	if (userEmail !== email) {
		throw new ApiError(401, "You are not author of this blog");
	}

	const result = await Blog.findByIdAndDelete(blogId);

	// check if result is empty

	if (!result) throw new ApiError(400, "failed to delete blog");

	return result;
};

const getAllBlogs = async (query: Record<string, unknown>) => {
	const blogQuery = new QueryBuilder(Blog.find().populate("author"), query)
		.search(["title", "content"])
		.filter()
		.sort();

	const response = await blogQuery.modelQuery;

	// check if response is empty

	if (response.length <= 0) throw new ApiError(404, "No blogs found");

	return response;
};

export const blogService = { createBlog, updateBlog, deleteBlog, getAllBlogs };
