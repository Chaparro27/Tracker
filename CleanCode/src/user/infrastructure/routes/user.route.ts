import {Router} from "express";
import UserRepositoryMongoDB from "../repository/mongo.repository";
import UserController from "../controller/user.controller";
import { UserUseCase } from "../../application/userUseCase";
import { validateSchema } from "../schemas/validator";
import { loginSchema, registerSchema } from "../schemas/auth.schema";



const route = Router();

const userRepository = new UserRepositoryMongoDB();

const userUseCase = new UserUseCase(userRepository);

const userController = new UserController(userUseCase);

route.post(`/register`,validateSchema(registerSchema),userController.CreateControler);
route.post(`/login`,validateSchema(loginSchema),userController.LoginController);
route.post(`/logout`,userController.LogoutController);
export default route;