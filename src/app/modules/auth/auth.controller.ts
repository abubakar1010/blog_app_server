import ApiResponse from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";
import { userService } from "./auth.service";

const registerUSer = asyncHandler(async (req, res) => {
	const userData = req.body;

	const result = await userService.createUser(userData);

    if(!result) {
        throw new Error('User is not created successfully');
    }

	res.status(201).json(
		new ApiResponse(201, "User is created successfully", result)
	);
});


const loginUser = asyncHandler(async (req, res) => {
	const loginCredential = req.body;

	const token = await userService.loginUser(loginCredential);

    if(!token) {
        throw new Error('login failed');
    }

	res.status(201).cookie("token", token).json(
		new ApiResponse(201, "User is login successfully","")
	);
});


export const authController = {
	registerUSer,
	loginUser
};