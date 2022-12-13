const { Pokemon } = require("../models/pokemon.model")

const getPokemons = async (req, res) => {

    try {
        const {page, pageSize}  = req.query;
        const size = parseInt(pageSize);

        const pokemons = await Pokemon.find().limit(size);

        if(pokemons.length === 0){
            return res.status(404).send({
                message: "No pokemons found"
            })
        }

        return res.status(200).send({ pokemons})
    } catch (error) {
        
    }
}

module.exports = { getPokemons } 