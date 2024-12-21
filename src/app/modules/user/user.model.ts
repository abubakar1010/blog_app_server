import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt'
import { config } from '../../config';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
    {
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            required: true,
            default: "user"
        },
        status: {
            type: String,
            enum:["inProgress", "Blocked"],
            required: true,
            default: "inProgress"
        },
        isDeleted: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, Number(config.bcryptRounds as string))
})

export const User = model<TUser>("User", userSchema)


