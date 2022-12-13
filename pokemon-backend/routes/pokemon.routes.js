const express = require("express");
const { getPokemons } = require("../controllers/pokemon.controller");
const { verifyToken } = require("../middleware/auth");
const cors= require('cors')


const pokemonRouter = express.Router();

pokemonRouter.get("/pokemons",cors(), verifyToken, getPokemons);


module.exports = {pokemonRouter}