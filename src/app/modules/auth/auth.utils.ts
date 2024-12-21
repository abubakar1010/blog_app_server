import jwt from 'jsonwebtoken';
import { config } from '../../config';
import ApiError from '../../utils/ApiError';

export const generateAuthToken = async function (email: string) {
    const token =  jwt.sign({ email }, config.jwtSecret as string, {expiresIn: "1d"} );
    if(!token) throw new ApiError(404, "token creation failed")
    return token;
}