import { UserEntity } from "../../domain/user.entity";
import UserRepository  from "../../domain/user.repository";
import UserModel from "../models/user.schema";
import bcrypt from "bcryptjs";

class UserRepositoryMongoDB implements UserRepository {

        async findUser(email: string): Promise<any> {
            const user = await UserModel.findOne({email});
            return user;
        }

        async registerUser(userIn: UserEntity): Promise<any> {
            try{
                const passwordHash = await bcrypt.hash(userIn.password, 10);
                const newUser = {
                    ...userIn,
                    password: passwordHash,
                };
                const user = await UserModel.create(newUser);
                return user;
            }catch(error){
                console.log(error);
            }
        }   
    }

    export default UserRepositoryMongoDB;