import React from 'react'
import style from './modules/Navbar.module.css'
function Navbar({getPokemon, setSearching}) {
    const handleOnSearch = (e) => {

        e.preventDefault();
        let v = document.getElementById("search").value;
        if(v.length > 0)
        {setSearching(true);
        getPokemon(v.toLowerCase());}
        
    }

    return (
        <div className = {style.bar}>
            <form className= {style.search}>
            <input className = {style.type} id = "search" />
            <button className= {style.button} onClick = {handleOnSearch}>
                Search
            </button>
            </form>
        </div>
    )
}

export default Navbar
