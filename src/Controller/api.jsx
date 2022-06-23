export const searchPokemon = async (pokemon) =>{
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        const data= await response.json();
        return data;
    } catch (error) {
        
    }
};

export const getPokemon = async (limit=30,offset=0) =>{
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const data= await response.json();
        return data;
    } catch (error) {
        
    }
};
/*promese star all _> array de promesas*/
export const getPokemonData = async (url) =>{
    try{
        const response = await fetch(url);
        const data= await response.json();
      console.log(data); 

        return data;
    }catch(err){

    }
}
