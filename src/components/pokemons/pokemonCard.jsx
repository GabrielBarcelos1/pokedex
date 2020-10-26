import React, { useState, useEffect } from 'react'
import {Link}from 'react-router-dom'
import '../../styles/pokemons/pokemonCard.css'
const PokemonsCard = (props) => {
    const [url, setUrl] = useState(props.url);
    const [name, setName] = useState(props.name);
    const [pokemonIndex, setPokemonIndex] = useState(props.pokemonIndex);


    useEffect(() => {
         setUrl(`https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`)        
    },[])

    return (
    <Link to={`pokemon/${pokemonIndex}`} className="link">
    <div className="card">
        <p className="pokemonIndex">{pokemonIndex}</p>
        <div className="pokemonInfo">
        <p>{name}</p>
        <div className="pokemonDivFoto">
        <img src={url} className="pokemonFoto"/>
        </div>
        </div>
    </div>
    </Link>
    )
}
export default PokemonsCard;