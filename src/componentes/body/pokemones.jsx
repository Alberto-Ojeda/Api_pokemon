import React from "react";


const Pokedex = (props) =>{
console.log(props);
const {pokemones}= props;

return(
<div>
<div>
<h1>Pokedex</h1>
<div>Paginas</div>

</div>
<div>

{pokemones.map((pokemon,idx) => {
return(

    <div key={pokemon.name}>#{idx*1}: {pokemon.name}</div>

    )

})}

</div>


</div>


);

}
export default Pokedex;