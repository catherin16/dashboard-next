import { FavoritePokemons } from "@/app/pokemons/components/FavoritePokemons";
import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";
import { PokemonsResponse } from "@/app/pokemons/interfaces/pokemon-response";
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon";
import { IoHeartOutline } from "react-icons/io5";


export const metadata = {
    title:'Favoritos',
    description:'Ad minin sit cupidatat culpa'
}


export default async function PokemonsPage() {


    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemons Favoritos <small className="text-violet-700">Global State</small>
            <FavoritePokemons />
            </span>

        </div>
    );
    }