const User = require('../models/User');
const LoggerInstance = require('../loader/logger');


    const userSignUp = async (req, res) => {
        const userData = req.body;
        console.log(userData);
        const user = new User(userData);
        try {
            await user.save();
            LoggerInstance.info('User registered Successfully');
            res.status(201).json({
                status: 'Success',
                message: 'User register Successfully',
                data: user
            })
        } catch (error) {
            LoggerInstance.info(error);
            res.status(500).send(error);
        }
    }

    // const getUsers = async ( req, res) =>{
    //     const users = await User.find({});
    //     if(!users) return new Error('Not found');
    //     res.send(users);
    // }



module.exports = {
    userSignUp
}