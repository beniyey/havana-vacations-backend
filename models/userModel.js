import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
})

const userModel = mongoose.model("Users", userSchema)
export default userModel