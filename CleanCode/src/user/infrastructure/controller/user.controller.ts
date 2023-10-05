import { Request, Response } from "express";
import { UserUseCase} from "../../application/userUseCase";
import {createToken} from "../libs/jwt";
import bcrypt from "bcryptjs";

class UserController {
    constructor(private userUseCase: UserUseCase){

    }

    public CreateControler = async (req:Request, res: Response)=>{
        const {email} = req.body;
        const validateEmail = await this.userUseCase.validateUser(email);
        if (validateEmail) {
            res.status(400).json({ error: 'Email is already in use' });
        } else {

            const user = await this.userUseCase.registerUser(req.body);
            const token = createToken(user)
            res.cookie('token', token);
            res.status(201).json({message:"User Created"})  
        }
    }

    public LoginController = async (req: Request, res: Response)=>{
        const {email,password} = req.body;
        const userFound = await this.userUseCase.validateUser(email);
        if (!userFound) return res.status(400).json({ message: "Wrong username or password"});

        const isMatch = await bcrypt.compare(password, userFound.password); //encrypt password
        if (!isMatch) return res.status(400).json({ message: "Wrong username or password" });

        const token = await createToken(userFound);
        res.cookie("token", token, {
        sameSite: "none",
        secure: true,
        httpOnly: false,
        });     

        return res.json({
        username: userFound.name,
        email: userFound.email,
        });
    }

    public LogoutController = (_req: Request, res:Response) => {
        res.cookie("token", "", {
            expires: new Date(0),
        });
        return res.sendStatus(200);
    }
}

export default UserController;