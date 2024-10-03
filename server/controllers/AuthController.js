

const User = require("../models/userModel")

const home = async (req, res) => {
    try {
        res
            .status(200)
            .send('Hello World! home page')
    } catch (error) {
        console.log(error);
    }
}

// 1. Get Registration Data 
// 2. check email/Registration existance in DB if already registered earlier
// 3. Hash  the password 
// 4. if not registered then create a new user and store  in DB
// 5. once registered then send a success message to user


const register = async (req, res) => {
    const data =  req.body;

    try {
        console.log(req.body);
        const { username, email, phone, password, cnfPassword } = req.body;
        const userExist = await User.findOne({ email: email });
        
        if (userExist) {
            return res.status(400).send({ message: "Email already exist" });
        }

        // hash the password
        



        const userCreated = await User.create({ username, email, phone, password, cnfPassword});


        res
            .status(200)
            .json({ msg: userCreated });
    } catch (error) {
        res
            .status(500)
            .json("server error")
        console.log(error);

    }
}

module.exports = { home, register };