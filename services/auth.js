import jwt from "jsonwebtoken"

export function isLoggedIn(req, res, next) {
    const authHeader = req.headers["authorization"]
    const token = authHeader.split(" ")[1]

    if (!token) res.sendStatus(401)

    jwt.verify(token, process.env.PRIVATE_ACCESS_KEY, (err) => {
        if (err) res.sendStatus(401)
        else next()
    })
}