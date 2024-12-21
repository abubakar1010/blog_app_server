import { config } from "../config";
import { TUserRole } from "../modules/user/user.interface";
import ApiError from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt, { JwtPayload } from "jsonwebtoken";

export const authorizedRole = (...authorizedRole: TUserRole[]) => {
	return asyncHandler(async (req, res, next) => {
		try {
			const token =
				req.cookies.token || req.headers.authorization?.split(" ")[1];
			if (!token) throw new ApiError(403, "you are not authorized");

			const decode = jwt.verify(token, config.jwtSecret as string);
			req.user = decode as JwtPayload;
			const userRole = (decode as JwtPayload).role;
            
			if (!(authorizedRole && authorizedRole.includes(userRole)))
				throw new ApiError(403, "you are not authorized");
			next();
		} catch (error) {
			next(error);
		}
	});
};
