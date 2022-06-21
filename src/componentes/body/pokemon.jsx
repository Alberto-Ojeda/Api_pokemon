import { searchPokemon,getPokemon } from '../../Controller/api';
import React from 'react';
import Pokedex from './pokemones';
const {useState,useEffect} =React;

const Pokemon=() =>{
  const [pokemones, setPokemones]=useState([]);
  const[search,setSearch] =useState('');
  const[pokemon,setpokemon] =useState();

  const fetchPokemones=async ()=>{
    try{
      const data= await getPokemon();
      setPokemones(data.results);
    } catch(err){

    }
  }

useEffect(() => {
fetchPokemones();
  
}, []);



const onChange= (evt)=>{
console.log(evt.target.value);
setSearch(evt.target.value);
};

const onClick = async (evt) => {
const data= await searchPokemon(search);
setpokemon(data);
console.log(data);

};


  return (
<div>
<div className="d-flex justify-content-center" style={{marginTop:"80px"}}>
<div style={{padding:"20px"}}>

<input type="text" style={{borderColor:"rgb(11, 94, 215)",height:"50px", borderRadius:"5%",borderWidth:"8px", padding:"20px", border:"none",boxShadow:"0px 2px 2px rgba(0,0,0,0.25)"}} placeholder='Buscar pokemon' onChange={onChange}></input>


</div>
    <div style={{padding:"20px"}}>
<button className='btn-primary' style={{height:"50px", width:"120px", borderRadius:"5%"}} onClick={onClick}>Buscar</button>
    </div>

{/* <div> */}
{/* {pokemon && */}

{/* <div> */}
{/* <div>Nombre: {pokemon.name}</div>
<div>Nombre: {pokemon.weight}</div>
<img src={pokemon.sprites.front_default}/> */}
</div>
<div className="d-flex justify-content-center">
<Pokedex pokemones={pokemones}/>

</div>
</div>



  );
}
export default Pokemon;



