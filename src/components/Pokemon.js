import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import style from './modules/Pokemon.module.css'
import Stat from './Stats'
function Pokemon({ pokemon}) {
    const [pokeImg, setPokeImg] = useState(``)
    const [pokeStats, setPokeStats] = useState([])
    const [pokeType, setPokeType] = useState([])
    //For Styling: 
    const [seeStat, setSeeStat] = useState(false);
    useEffect(() => {
        axios.get(pokemon.url).then(results => {
            setPokeImg(results.data.sprites.front_default)
            return results.data
        }).then(data => {
            setPokeStats(data.stats)
            setPokeType(data.types.map(obj => (obj.type.name)))
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    var data = pokeStats.map((obj, id) => (
        {
            "id": id,
            "name": obj.stat.name,
            "value": obj.base_stat,
        }
    ))
    var type = pokeType.join(", ")
    const handleOnClick = (e) =>{
        setSeeStat(!seeStat)
        console.log(e.target);
    }
    var name = pokemon.name[0].toUpperCase();
    var remnm = pokemon.name.substring(1);
    var fnm = name + remnm;
    return (
        <>
        <div className = {style.card} id = "card" onClick = {handleOnClick} >
        
            <h2>{fnm}</h2><br/>
            <img className={style.img} src={pokeImg} alt={pokemon.name}></img>
        
            <div className="stat" id = "statID" >
                {seeStat ? <Stat data={data} /> : <div></div> }
            </div>
        <p id = "type"><strong> type </strong>: {type}</p>
        </div>
        </>
    )
}

export default Pokemon
