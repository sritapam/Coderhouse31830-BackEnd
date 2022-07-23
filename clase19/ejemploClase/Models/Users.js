import mongoose from "mongoose";
const {Schema, model} = mongoose

const userCollection = 'users';

const UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    lastName: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    userName: {type: String, required: true, max: 100},
    password: {type: Number, required: true}
})

const UserModel = model(userCollection, UserSchema)

export default UserModel;

