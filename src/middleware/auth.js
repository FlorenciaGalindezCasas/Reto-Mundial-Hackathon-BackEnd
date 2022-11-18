const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    let token = req.headers["credential"];
    if (!token) throw new Error("Unauthorized!");
    else {
        jwt.verify(token, process.env.JWT_SEC, (err) => {
            if (err) throw new Error("Token is not valid!");
            next();
        });
    }
};

module.exports = auth;