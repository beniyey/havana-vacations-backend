import jwt from "jsonwebtoken"

export function isLoggedIn(req, res, next) {
    const token = req.cookies?.token

    if (!token) res.sendStatus(401)

    jwt.verify(token, process.env.PRIVATE_ACCESS_KEY, (err) => {
        if (err) res.sendStatus(401)
        else next()
    })
}