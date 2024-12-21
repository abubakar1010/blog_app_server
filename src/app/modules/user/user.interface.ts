import {UserRole} from './user.constant'
export type TUserRole = keyof typeof UserRole

export type TUser =  {
    name: string;
    password: string;
    email: string;
    role: TUserRole;
    status: string;
    isDeleted: boolean;
}




