import UserModel from "../models/user.schema";
import { UserInterface } from "../types/user.type";

const registerUser = async(user:UserInterface) => {
    const response = await UserModel.create(user)
    return response;
}

const loginUser = async(email:string) => {
    const response = await UserModel.findOne({email})
    //if (!userFound) return res.status(400).json({ message: "User not found" });
    return response;
}

export {registerUser, loginUser};