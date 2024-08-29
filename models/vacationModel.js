import mongoose from "mongoose";

const vacationSchema = new mongoose.Schema({
    image: String,
    likes: Number,
    description: String,
    date: String,
    location: String,
    price: String
})

const vacationsModel = mongoose.model("Vacations",vacationSchema)
export default vacationsModel