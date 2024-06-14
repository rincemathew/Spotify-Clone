const express = require("express");
const router = express.Router();
const User = require("../models/user")
const bcrypt = require("bcrypt")
const {getToken} = require("../utils/helpers")

//register user
router.post("/register",async (req,res) => {

    const {email, password, firstName, lastName, userName} = req.body;
    const user = await User.findOne({email:email})
    if(user) {
        return res.status(403).json({error:"A user with this email already exists"})
    }

    const hashedPassword = bcrypt.hash(password,10);
    const newUserData = {email,password,firstName,lastName,userName}
    const newUser = await User.create(newUserData);
    //creating token
    const token = getToken(email,newUser);
    const userToReturn = {...newUser.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});