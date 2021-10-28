import React, {useState} from 'react'

function Search({getPokemon}) {
    const [search , setSearch] = useState('');
    return (
        <div>
            <form>
                <input onChange = {(e) =>{
                    setSearch(e.target.value);
                }}/>
                <button onClick = {() => {
                    console.log(search)
                    getPokemon(search)
                }}> 
                    Search 
                </button>

            </form> 
        </div>
    )
}

export default Search
