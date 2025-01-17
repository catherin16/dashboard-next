import { SimplePokemon } from '@/app/pokemons/interfaces/simple-pokemon';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'



interface PokemonState{
    favorites: {  [key: string] : SimplePokemon}
}

const getInitialState = (): PokemonState => {

    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');

    return favorites;
}

const initialState : PokemonState = {
    favorites:{}
   // '1': {id: '1', name: 'bulbasaur'},
    //'3': {id: '3', name: 'venusaur'},
    //'5': {id: '5', name: 'charmeleon'},
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setFavoritePokemon(state,action: PayloadAction<{  [key: string] : SimplePokemon}>){
            state.favorites = action.payload;
        },
        toggleFavorite(state,action: PayloadAction<SimplePokemon>){
            const pokemon = action.payload;
            const {id} = pokemon;

            if(!!state.favorites[id]){
                delete state.favorites[id];
                //return;
            } else{
                state.favorites[id] = pokemon;
            }
            localStorage.setItem('favorite-pokemons',JSON.stringify(state.favorites));
        }
    }
});

export const {toggleFavorite,setFavoritePokemon } = pokemonsSlice.actions

export default pokemonsSlice.reducer