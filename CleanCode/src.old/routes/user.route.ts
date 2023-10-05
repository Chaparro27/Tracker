import {Router} from "express";
import { UserRegister, Userlogin } from "../controllers/user.controller";

const route = Router();

route.post(`/user`, UserRegister)
route.post(`/login`, Userlogin)

export default route;