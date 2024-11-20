import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";
import { PokemonsResponse } from "@/app/pokemons/interfaces/pokemon-response";
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon";



const getPokemons = async(limit = 20,offset= 0):Promise<SimplePokemon[]> =>{
    const data:PokemonsResponse = await(fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)).then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id:pokemon.url.split('/').at(-2)!,
        name:pokemon.name,
    }));

    return pokemons;

}

export default async function PokemonsPage() {

    const pokemons =await getPokemons(151);

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de pokemons <small className="text-violet-700">estático</small></span>
            <PokemonGrid pokemons={pokemons}/>

        </div>
    );
    }