const User = require('../models/Users')
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
    const { name, email, password, nationality } = req.body
    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            const tkn = genToken(userExist._id);
            return res.status(200).json({user: userExist, tkn})
        };
        const hashedPassword = CryptoJS.AES.encrypt(
            password,
            process.env.PASS_SEC
        ).toString();
        const newUser = new User({ name, email, password: hashedPassword, nationality })
        let savedUser = await newUser.save();
        req.user = savedUser;
        const tkn = genToken(savedUser._id);
        return res.status(200).json({user: savedUser, tkn});
    } catch (error) {
        return next(error)
    }
};

const signin = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found')
        var bytes = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        if (originalText !== password) console.log("Invalid password!");
        const tkn = genToken(user._id)
        req.user = user;
        res.status(200).json({ user, tkn });
    } catch (error) {
        return next(error)
    }
};

const updateUser = async (userdata) => {
    try {
        const email = userdata.email;
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');
        if (user.voted) throw new Error('User already voted');
        user.voted = true;
        await user.save();
        return;
    } catch (error) {
        throw new Error(error.message)
    }
}

const genToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SEC,
        { expiresIn: "1d" }
    );
}

module.exports = { signup, signin, updateUser }
