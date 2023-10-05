import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
//import { UserEntity } from '../../domain/user.entity';

    dotenv.config();


    const tokenSecretKey = process.env.TOKEN_SECRET_KEY;

    export function createToken(payload:any){
        const newPayload = {
            id: payload._id,
            email: payload._email
        }
        return jwt.sign(newPayload, tokenSecretKey,{
            expiresIn:"1h"
        })
    }
