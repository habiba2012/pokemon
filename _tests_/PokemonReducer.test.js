// eslint-disable-next-line import/named
import { types } from '../store/constants/types';
/* eslint-disable no-undef */

import pokemonReducer from '../store/reducers/pokemonReducer';

describe('Pokemon Reducer', () => {

    it('Should return default state', () => {
        const newState = pokemonReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {

        const pokemons = [{ allPokemon: 'Test 1' }, { eachPokemon: 'Test 2' }, { inalEachPokemon: 'Test 3' }];
        const newState = pokemonReducer(undefined, {
            type: All_POKEMON,
            payload: pokemons
        });
        expect(newState).toEqual(pokemons);

    });

});
/* "allPokemon": {}, "eachPokemon": [], "errors": "", "finalEachPokemon": [],
"isLoading": true, "limit": 20, "offset": 20, "searchTerm": "" */