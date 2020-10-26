import React from 'react';
import PokemonList from "./pokemons/pokemonsList.jsx"
import '../styles/landing.css'

function Landing() {

    return (
        <div className="app">
        <PokemonList/>
        </div>
    );
  }
  
  export default Landing;
  