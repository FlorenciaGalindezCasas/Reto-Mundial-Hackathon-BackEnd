const jwt_decode = require('jwt-decode');

const auth = (req, res, next) => {
    let token = req.headers["credential"];
    const userdata = jwt_decode(token);
    if (!token || !userdata) return res.status(403).json({ message: "Unauthorized!" });
    else {
        req.userdata = userdata
        next();
    }
};

module.exports = auth;