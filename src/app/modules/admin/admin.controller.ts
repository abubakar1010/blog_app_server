import ApiError from "../../utils/ApiError";
import ApiResponse from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";
import { adminService } from "./admin.service";

const blockUser = asyncHandler(async (req, res) => { 
    // get user id from request params
    const { id } = req.params;

    // block user using admin service
    const result = await adminService.blockUsers(id);

    // check if result is empty
    if (!result) throw new ApiError(400, "failed to block user");

    res.status(200).json(
        new ApiResponse(200, "User blocked successfully", result)
    );
});

export const adminController = {
    blockUser
}