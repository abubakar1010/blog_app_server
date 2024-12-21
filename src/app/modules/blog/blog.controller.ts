import ApiError from "../../utils/ApiError";
import ApiResponse from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";
import { blogService } from "./blog.service";

const createBlog = asyncHandler(async (req, res) => {
	// get blog content from request body

	const blogContent = req.body;

	// create blog using blog service

	const result = await blogService.createBlog(blogContent, req.user.email);

	// check if result is empty
	if (!result) throw new ApiError(400, "failed to create blog");

	res.status(201).json(
		new ApiResponse(201, "Blog created successfully", result)
	);
});

const updateBlog = asyncHandler(async (req, res) => {
	// get blog content from request body

	const { id } = req.params;

	const updateContent = req.body;

	// create blog using blog service

	const result = await blogService.updateBlog(
		id,
		updateContent,
		req.user.email
	);

	// check if result is empty
	if (!result) throw new ApiError(400, "failed to update blog");

	res.status(200).json(
		new ApiResponse(200, "Blog updated successfully", result)
	);
});

const deleteBlog = asyncHandler(async (req, res) => {
	// get blog content from request body

	const { id } = req.params;

	// create blog using blog service

	const result = await blogService.deleteBlog(id, req.user.email);

	// check if result is empty
	if (!result) throw new ApiError(400, "failed to delete blog");

	res.status(200).json(
		new ApiResponse(200, "Blog deleted successfully", result)
	);
});

const getAllBlogs = asyncHandler(async (req, res) => {
	// get query from request query

	const query = req.query;

	// create blog using blog service

	const result = await blogService.getAllBlogs(query);

	// check if result is empty
	if (result.length <= 0) {
		throw new ApiError(400, "failed to get blogs");
	}

	res.status(200).json(
		new ApiResponse(200, "Blogs fetched successfully", result)
	);
});

export const blogController = {
	createBlog,
	updateBlog,
	deleteBlog,
	getAllBlogs,
};
