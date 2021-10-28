import React from 'react'
import Pokemon from './Pokemon'
import style from './modules/PokeList.module.css'
function PokeList({ pokemons }) {
    return (
        <div className={style.pokemonGrid}>
            {pokemons.map(pokemon =>
                <div key={pokemon.name} className = {style.element}>
                    <Pokemon pokemon={pokemon}/>
                </div>
            )}
        </div>
    )
}

export default PokeList
