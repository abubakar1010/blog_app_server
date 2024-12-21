import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TAuth } from "./auth.interface";
import {generateAuthToken} from './auth.utils'


const createUser = async (userData: TUser) => {

    // check user already exist or not
    const user = await User.findOne({ email: userData.email });

    if(user) {
        throw new Error('User already exist');
    }

    const result = await User.create(userData);

    return result;
};


const loginUser = async(loginCredential: TAuth) => {

    // check user already exist or not
    const user = await User.findOne({ $or: [{ email: loginCredential.email }, { password: loginCredential.password }] });
    
    if(!user) {
        throw new Error("invalid email or password");
    }

    const userEmail = user.email

    const token = generateAuthToken(userEmail);
    return token;
}

export const userService = { createUser, loginUser };