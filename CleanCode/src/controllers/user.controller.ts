import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/user.services";

const UserRegister = async (req:Request, res:Response) =>{
    const {body} = req;
    const user = await registerUser(body);
    res.send({user})
}
const Userlogin = async (req:Request, res:Response) =>{
    const {email} = req.body
    const user = await loginUser(email);
    res.send({user})
}

export { Userlogin, UserRegister}