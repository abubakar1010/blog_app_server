import ApiError from "../../utils/ApiError";
import ApiResponse from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";
import { blogService } from "./blog.service";

const createBlog = asyncHandler(async (req, res) => {

	// get blog content from request body

	const blogContent = req.body;

	// create blog using blog service

	const result = await blogService.createBlog(blogContent);

	// check if result is empty
	if (!result) throw new ApiError(400, "failed to create blog");

	res.status(201).json(
		new ApiResponse(201, "Blog created successfully", result)
	);
});

export const blogController = { createBlog };