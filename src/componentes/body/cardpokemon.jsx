import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

/* peor component */
/*promese */
const CardPokemon =(props)=>{

    const{pokemon} =props;
/*     console.log(pokemon);
 */    return(
        <div className='card'>
            <div className='pokemon-img'>
                <img src={pokemon.sprites.front_default}
                alt={pokemon.name}
                />
            </div>

            <div>
                <div>
                    <h2>{pokemon.name}</h2>
                    <div>{pokemon.id}</div>
                </div>
           
                <div>
                    <div>
                        {pokemon.types.map((type,idx) => {
                            return <div key={idx}> {type.type.name} </div>; 
                        })}
                    </div>
                    <div> corazon
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CardPokemon;