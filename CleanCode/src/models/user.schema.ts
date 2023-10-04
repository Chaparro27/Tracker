import {Schema, model} from "mongoose";

const UserSchema = new Schema(
    {
        name:{
            type: "string",
        },
        email:{
            type: "string",
            unique: true,
        },
        password:{
            type: "string",
            required: true
        }
    },
    {
        timestamps:true
    }
);

const UserModel = model("users", UserSchema);
export default UserModel;