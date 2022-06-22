import React from "react";
import CardPokemon from './cardpokemon';
import Pagination from "./paginacion";

const Pokedex = (props) =>{
/* console.log(props); */
const {pokemones, page, setPage,total}= props;
const lastPage = () => { 
    const nextPage= Math.max(page-1,0);
    setPage(nextPage);
    
}
const nextPage = () => {
    const nextPage= Math.min(page+1,total);
    setPage(nextPage);
}
return(
<div>
<div>
<h1>Pokedex</h1>
<Pagination
    page={page+1}
    totalPages={total}
    onLeftClick={lastPage}
    onRightClick={nextPage}

/>
<div>Paginas</div>

</div>
<div>
{/* toma los elementos del array y regresa */}
{pokemones.map((pokemon,idx) => {
return(
<CardPokemon pokemon={pokemon} key={pokemon.name}/>

    )

})}

</div>


</div>


);

}
export default Pokedex;