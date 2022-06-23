import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import pokemoncard from '../../styles/pokemoncard.css'

/* peor component */
/*promese */

const CardPokemon =(props,infoPokemon)=>{
    


    const{pokemon} =props;
/*     console.log(pokemon);
 */    return(
        <div className='cardpokemon'>
            <div className='pokemon-img-card' style={{width:"350px"}} key={pokemon.id} >
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
                alt={pokemon.name}
                className="pokemon-img"
                />
            </div>

            <div className='body-card'>
                <div className='card-top'>
                    <h2>{pokemon.name}</h2>
{/*                     <div>{pokemon.id}</div>
 */}                </div>
           
                <div>
                    <div className='abilities'>
                        {pokemon.types.map((type,idx) => {
                            return <div key={idx} className={type.type.name} >  {type.type.name} </div>; 
})}
                    </div>
                    <div className='stats'>
                    {pokemon.stats.map((stats,idx) => {
                            return <div key={idx} className={stats.stat.name} >  <div className='points' align="justify">  <p>{stats.stat.name}</p> <p>   {stats.base_stat} </p> <p className='bar_power'></p>  </div>

                             </div>
                            ;
                        })}

                </div>
                </div>
            </div>
        </div>
    )
    
}

export default CardPokemon;