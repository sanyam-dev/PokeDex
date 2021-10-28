import React, { useState, useEffect } from 'react'
import PokeList from './components/PokeList';
import axios from 'axios';
import Page from './components/Page';
import style from './components/modules/App.module.css';
import Navbar from './components/Navbar';
import SearchCard from './components/SearchCard';


//TODO: SEARCH !!!

function App() {
	const [pokemonList, setPokemonList] = useState([]);
	const [loading, setLoading] = useState('true')
	const [next, setNext] = useState(null);
	const [prev, setPrev] = useState(null);
	const [url, setURL] = useState(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`)

	//For Searching : 
	const [searching, setSearching] = useState(false)
	const [result, setResult] = useState("")
	const [searchIMG, setSearchIMG] = useState("");
	const [searchStat, setSearchStat] = useState([]);
	const [searchAbility, setSearchAbility] = useState([]);
	const [searchType, setSearchType] = useState("")
	const [searchWeight, setSearchWeight] = useState("")
	const [searchHeight, setSearchHeight] = useState("")
	const fetchPokemonList = async () =>{
		if(!searching)
		{
			let response = await axios.get(url).then(res=>res.data)
			setPokemonList(response.results.map(p => (p)))
			setNext(response.next);
			setPrev(response.previous);
			setLoading(false);
		}
	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => fetchPokemonList(), [url])

	const handleNext = () => {
		if (next !== null) {
			setURL(next)
		}
	}

	const handlePrev = () => {
		if (prev !== null) {
			setURL(prev)
		}

	}

	//For Searching 
	const getPokemon = (search) => {
		const searchURL = `https://pokeapi.co/api/v2/pokemon/${search}`;
		axios.get(searchURL).then(result=>result.data).then(result=>{
			setResult(result.name);
			setSearchIMG(result.sprites.front_default);
			setSearchAbility(result.abilities.map(obj=>(obj.ability.name)))
			setSearchStat(result.stats.map(obj=>({
				"base_stat": obj.base_stat,
				"name":obj.stat.name,
			})))
			setSearchWeight(result.weight)
			let typearr = result.types.map((obj) => (obj.type.name))
			setSearchType(typearr.join(', '))
			setSearchHeight(result.height)
			
		})
	}
	return (
		<>
			<div className={searching ? style.container : style.normal}>
			<Navbar getPokemon={getPokemon} setSearching={setSearching} />
			{ searching ? <SearchCard name = {result}img = {searchIMG} height = {searchHeight} abilities = {searchAbility} stats = {searchStat} weight = {searchWeight} type  = {searchType} /> :
				loading ? <div>loading....</div> :
				<>
					
					<PokeList pokemons={pokemonList} />
					<Page prev={prev} next={next} handleNext={handleNext} handlePrev={handlePrev} />
				</>
			}
			</div>
		</>
	)
}

export default App
