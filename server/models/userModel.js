const mongoose = require('mongoose');
const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cnfPassword: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

// hashing
// the pre save method  is used to hash the password before saving it to the database

userSchema.pre('save', async function (next) {
    const user = this;
    console.log(this);

    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRound);
    const hashedCnfPassword = await bcrypt.hash(user.cnfPassword, saltRound);
    if (!user.isModified('password')) {
        next();
    }
    try {
        user.password = hashedPassword;
        user.cnfPassword = hashedCnfPassword;
    } catch (error) {
        next(error)
    }

});





// model/Collection name - first  letter should be capital

const User = new mongoose.model('User', userSchema);
module.exports = User;
