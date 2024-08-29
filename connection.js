import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.MONGODB_URI).then((res) => {
    console.log("mongoDb is connected...")
}, (e) => {
    console.log("error", e.message)
})
