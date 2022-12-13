const { User } = require("../models/user.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secreteKey = "magicRiver";



const createUser = async (req, res) =>{

    try {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt );

    const user = {
        email: req.body.email,
        password: hashedPassword,
    }

    const isExist = await User.findOne({email: user.email })
    if(isExist){
        return res.status(500).send({
            message: "User is already exist"
        });
    }

    const newUser = new User({...user, hashedPassword});
    await newUser.save();
    return res.status(201).send(newUser);

   } catch (error) {
        return res.status(500).send({
            error: "Problem while creating user"
        });
   }
}

const loginUser = async (req, res) =>{
try {

    const isExist = await User.findOne({email: req.body.email })

    const validatePassword = await bcrypt.compare(req.body.password, isExist.password)
    
    if(validatePassword){
        const token = jwt.sign({id: isExist._id}, secreteKey, {expiresIn: "1h"});
        res.cookie("authToken",token);
        return res.status(200).send({...isExist, token});
    } else {
        return res.send({
            message: "Invalid credentails"
        })
    }
    

} catch (error) {
    
}
}




module.exports = { createUser, loginUser } 