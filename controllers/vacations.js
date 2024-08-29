import { Router } from "express";
import vacationsModel from "../models/vacationModel.js";
import { isLoggedIn } from "../services/auth.js";

const router = Router()

router.post("", isLoggedIn, async (req, res, next) => {
    try {
        const vacations = req.body
        await vacationsModel.insertMany(vacations)
        res.send("vacations saved...")
    } catch (error) {
        res.send(error.message)
    }
})

router.get("", isLoggedIn, async (req, res, next) => {
    try {
        const vacations = await vacationsModel.find()

        if (Array.isArray(vacations)) {
            res.send(vacations)
        } else {
            res.send([])
        }

    } catch (error) {
        next(error)
    }
})

export default router