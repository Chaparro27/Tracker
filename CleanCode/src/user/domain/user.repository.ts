import { Response } from "express";
import { UserEntity } from "./user.entity";

interface UserRepository{
    findUser(email:string):Promise<UserEntity>;
    registerUser(user:UserEntity):Promise<UserEntity>;
}

export default UserRepository;