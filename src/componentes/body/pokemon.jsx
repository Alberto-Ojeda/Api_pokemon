import { searchPokemon } from '../../Controller/api';
import React from 'react';
const {useState} =React;


const Pokemon=() =>{
const[search,setSearch] =useState('');

const onChange= (evt)=>{
console.log(evt.target.value);
setSearch(evt.target.value);
}
const onClick = async (evt) => {
const data= await searchPokemon(search);
console.log(data);

}


  return (
<div>
<div>

<input placeholder='Buscar pokemon' onChange={onChange}></input>


</div>
    <div>
<button onClick={onClick}>Buscar</button>
    </div>
    </div>
  );
}
export default Pokemon;



