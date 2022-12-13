const express = require("express")
const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    attacks: {
        type: Array,
    },
    abilities:{
        type: Array,
    },
    image: {
        type: String,
    }
})

const Pokemon = mongoose.model("Pokemon", pokemonSchema);
module.exports = {Pokemon}