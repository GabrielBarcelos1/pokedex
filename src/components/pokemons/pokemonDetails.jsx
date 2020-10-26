import React, { useState , useEffect}from 'react';
import Axios from 'axios'
import Seta from '../layout/seta'
import '../../styles/pokemons/pokemonDetails.css'
 const PokemonsList = (props) => {
     const [pokemonIndex,setPokemonIndex] = useState(props.match.params.pokemonIndex)
     const [imageUrl,setImageUrl] = useState("")
     const [name,setName] = useState("")
     const [primaryType, setPrimaryType] = useState("")
     const [secundaryType, setSecundaryType] = useState("")
     const [statsHp, setStatsHp] = useState("")
     const [statsAttack, setStatsAttack] = useState("")
     const [statsDefense, setStatsDefense] = useState("")
     const [statsSpeed, setStatsSpeed] = useState("")
     const [statsSpAttack, setStatsSpAttack] = useState("")
     const [statsSpDefense, setStatsSpDefense] = useState("")

     useEffect(()=>{
        async function pokemonUnico(){
        await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`).then(res=>{
            setImageUrl(`https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`)
            setName(res.data.species.name)
            setPrimaryType(res.data.types[0].type.name)
            if(res.data.types[1] != undefined){
                setSecundaryType(res.data.types[1].type.name)
            }
            console.log(res.data)
            setStatsHp(res.data.stats[0].base_stat)
            setStatsAttack(res.data.stats[1].base_stat)
            setStatsDefense(res.data.stats[2].base_stat)
            setStatsSpeed(res.data.stats[5].base_stat)
            setStatsSpAttack(res.data.stats[3].base_stat)
            setStatsSpDefense(res.data.stats[4].base_stat)
          
            
        })
        }
    pokemonUnico()
     },[])
     
    return (
        <div className="principal">
            <Seta className="seta"/>
            <div className="boxPokemonUnico">
            <div className="divIndex">
                <p className="index">{pokemonIndex}</p>
                <div className="divType">
                    <p className="type">{primaryType}</p>
                    <p className="type">{secundaryType}</p>
                </div>
            </div>
            <div className="divMeioInfo">
            <img src={imageUrl} className="pokemonUnicoImg"/>
            <div className="statsNumbers">   
                <h2>{name}</h2>
                <div className="divSmallInfo">
                    <p>Hp</p>
                    <p>{statsHp}</p>
                </div>
                <div className="divSmallInfo">
                    <p>Attack</p>
                    <p>{statsAttack}</p>
                </div>
                <div className="divSmallInfo">
                    <p>Defense</p>
                    <p>{statsDefense}</p>
                </div>
                <div className="divSmallInfo">
                    <p>Speed</p>
                    <p>{statsSpeed}</p>
                </div>
                <div className="divSmallInfo">
                    <p>Sp Atk</p>
                    <p>{statsSpAttack}</p>
                </div>
                <div className="divSmallInfo">
                    <p>Sp Def</p>
                    <p>{statsSpDefense}</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default PokemonsList;