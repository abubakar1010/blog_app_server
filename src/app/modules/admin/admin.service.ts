import ApiError from "../../utils/ApiError";
import { Blog } from "../blog/blog.model";
import { User } from "../user/user.model";

const blockUsers = async (userId: string) => {
	// check user exist or not
	const user = await User.findById(userId);

	// if user not exist throw error

	if (!user) throw new ApiError(404, "User not exist");

	// check if user is blocked or not

	if (user.isBlocked) throw new ApiError(400, "User already blocked");

	// block user

	const result = await User.findByIdAndUpdate(
		userId,
		{ isBlocked: true },
		{ new: true }
	);

	// check if result is empty

	if (!result) throw new ApiError(400, "failed to block user");

	return result;
};

const deleteBlog = async (blogId: string) => {
	// check blog exist or not

	const blog = await Blog.findById(blogId);

	// if blog not exist throw error

	if (!blog) throw new ApiError(404, "Blog not exist");

	// delete blog

	const result = await Blog.findByIdAndDelete(blogId);

	// check if result is empty

	if (!result) throw new ApiError(400, "failed to delete blog");

	return result;
};

export const adminService = {
	blockUsers,
	deleteBlog,
};
