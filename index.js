import "./connection.js"
import app from "./app.js"
import express from "express"
import cookieParser from "cookie-parser"
import authRouter from "./controllers/auth.js"
import vacationsRouter from "./controllers/vacations.js"
import jwt from "jsonwebtoken"
import cors from "cors"
import fs from "fs"

process.env.PORT || (process.env.PORT = 3002)

app.use(express.json())
app.use(cookieParser())

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}
app.use(cors(corsOptions))

app.use("/auth", authRouter)
app.use("/vacations", vacationsRouter)


app.get("/get-user", (req, res) => {
    const token = req.cookies?.token

    if (!token) return res.sendStatus(401)

    jwt.verify(token, process.env.PRIVATE_ACCESS_KEY, (err, payload) => {
        if (err) return res.sendStatus(401)
        else return res.send(payload)
    })

})


function catchAll(error, req, res, next) {
    if (parseInt(error.status) >= 500) {
        let logMessage =
            `\n****************************************************************************** 
server failed, error code: ${error.status} , with message: ${error.message} 
****************************************************************************** `

        fs.appendFile(process.cwd() + "/utils/log.txt", logMessage, (err) => err && console.error(err))
        res.send("there has been an error, please try again..")
    }
}

app.use(catchAll)


app.listen(process.env.PORT, () => {
    console.log("listening on port " + process.env.PORT)
})