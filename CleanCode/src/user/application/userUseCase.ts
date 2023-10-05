import  UserRepository  from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

export class UserUseCase{
    constructor(private readonly userRepository: UserRepository) {}

    public async registerUser(
        { name, email, password }: { name: string; email: string; password: string }
    ) {
        const userValue = new UserValue({ name, email, password });
        const userRegister = await this.userRepository.registerUser(userValue);
        return userRegister;
    }

    public async validateUser(email:string){
        const findUser = await this.userRepository.findUser(email);
        return findUser;
    }

}