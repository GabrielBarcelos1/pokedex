import React, { useState, useEffect } from 'react';
import Axios from 'axios'


import PokemonCard from './pokemonCard.jsx'
import '../../styles/pokemons/pokemonList.css'
 const PokemonsList = () => {
    const [url, setUrl] = useState("");
    const [pokemon, setPokemon] = useState([])

    useEffect(()=>{
        async function pegarPokemons(){
        await Axios.get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0").then(res=>{

            setPokemon(res.data.results)
            
        })
    }
    pegarPokemons()
    },[])

        return (
        <div className="cardList">
        {pokemon.map(pokemonMap =>{
            return  <PokemonCard
                pokemonIndex={pokemonMap.url.split("/")[pokemonMap.url.split("/").length - 2]}
                key={pokemonMap.name}
                name={pokemonMap.name}
                url={pokemonMap.url}
            />})}
        </div>
        )
}
export default PokemonsList;
