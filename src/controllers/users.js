const User = require('../models/user')

const postUser = async (req, res, next) => {
    try {
        const userdata = req.userdata;
        const email = userdata.email;
        const user = await User.findOne({ email });
        if (user.voted) return res.status(200).json(user);
        const { nationality } = req.body;
        const name = `${userdata.given_name}${userdata.family_name}`
        const newUser = new User({name, email, nationality})
        let savedUser = await newUser.save();
        return res.status(200).json(savedUser);
    } catch (error) {
        return next(error)
    }
};

const updateUser = async (req, res, next) => {
    try {
        const userdata = req.userdata;
        const email = userdata.email;
        const user = await User.findOne({ email });
        if(!user) throw new Error('User not found');
        if(user.voted) throw new Error('User already voted');
        user.voted = true;
        return res.status(200).json(user);
    } catch (error) {
        return next(error)
    }
}

module.exports = { postUser, updateUser}
