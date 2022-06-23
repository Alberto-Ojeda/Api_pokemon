import { searchPokemon,getPokemon, getPokemonData } from '../../Controller/api';
import React from 'react';
import Pokedex from './pokemones';
import CardPokemon from './cardpokemon';
import pokemoncard from '../../styles/pokemoncard.css'
import CardUnique from './cardunique';
const {useState,useEffect} =React;

const Pokemon=() =>{
  const [pokemones, setPokemones]=useState([]);
  const[search,setSearch] =useState('');
  const[pokedex,setpokedex] =useState();
  const[page, setPage] = useState(0);
  const[total, setTotal] = useState(0);
  const[loading, setLoading] = useState(true);
  const fetchPokemones=async ()=>{
    try{
      const data= await getPokemon(25, 25*page);
/*       setPokemones(data.results); */
      const promises=data.results.map(async (pokemon)=>{
        return  await getPokemonData(pokemon.url);

      })
      const results =await Promise.all(promises)
      setPokemones(results)
      setLoading(false);
      setTotal(Math.ceil(data.count/25));
    } catch(err){

    }
  }

useEffect(() => {
fetchPokemones();
  
}, [page]);

const onChangeclick= (evt)=>{
  /* console.log(evt.target.value);
   */setpokedex(evt.target.value);
  };

const onChange= (evt)=>{
/* console.log(evt.target.value);
 */setSearch(evt.target.value);
};

const onClick = async (evt) => {
/* const data= await searchPokemon(search);
setpokemon(data); */
onSearch(search);
};



const onSearch = async (pokemon)=>{
  setLoading(true);
  const result = await searchPokemon(pokemon);
  if(!result){
    return console.log("no hay resultado")
  }else{
    setPokemones([result]);
  }

  setLoading(false);
}





  return (
<div>
  <span className='escritura'>BIENVENIDO A LA POKEDEX</span>
<div className="d-flex justify-content-center" style={{marginTop:"80px"}}>
<div style={{padding:"20px"}}>

<input type="text" style={{borderColor:"rgb(96, 85, 112)",height:"50px", borderRadius:"5%",borderWidth:"8px", padding:"20px", border:"none",boxShadow:"0px 2px 2px rgba(0,0,0,0.25)"}} placeholder='Buscar pokemon' onChange={onChange}></input>


</div>
    <div style={{padding:"20px"}}>
<button className='' style={{color:"white",borderColor:"white", height:"50px", width:"120px", borderRadius:"8%", backgroundColor:"rgb(96, 85, 112)"}} onClick={onClick}>Buscar</button>
    </div>

{/* <div> */}
{/* {pokemon && */}

{/* <div> */}
{/* <div>Nombre: {pokemon.name}</div>
<div>Nombre: {pokemon.weight}</div>
<img src={pokemon.sprites.front_default}/> */}
</div>
<div className="d-flex justify-content-center">
  {loading ? (
  <div> cargando pokemones . . .</div>
  ) : (
<Pokedex pokemones={pokemones}
page={page}
setPage={setPage}
total={total}
/>

  )}

  
</div>

<div className="pokemones-column" style={{ marginLeft:"50px"}} >
{/* toma los elementos del array y regresa */}
{pokemones.map((pokemon,idx) => {
return(
  
<CardPokemon 
pokemon={pokemon}
 key={pokemon.name}
 infoPokemon={setpokedex}
 />

    )

} )}

</div>

</div>



  );
}
export default Pokemon;



