const express = require("express");
const { pokemonRouter } = require("./pokemon.routes");
const { userRouter } = require("./user.routes");
const router = express.Router();


router.use("/user",userRouter);

router.use("/pokemon",pokemonRouter);


module.exports = {router}