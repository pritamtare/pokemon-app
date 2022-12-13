const express = require("express");
const { createUser, loginUser } = require("../controllers/user.controller");
const cors= require('cors')


const userRouter = express.Router();

userRouter.post("/add-user", cors(), createUser, );

userRouter.post("/login",cors(), loginUser);

module.exports = {userRouter}