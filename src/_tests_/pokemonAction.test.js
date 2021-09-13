import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { allPokemon, searchTerm, sorting, performSearch } from '../store/actions/pokemonAction'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authenticate action', () => {
    let store;
    // set up a fake store for all our tests
    beforeEach(() => {
        store = mockStore({ pokemon: [] });
    });

    it('Action for all pokemon fetch', () =>
        store.dispatch(allPokemon(
            {
                offset: 0,
                limit: 0
            }
        ))
    );
    it('actionCreator search', () => {
        const search = searchTerm()
        expect(search).toEqual({ type: "allPokemon", output: undefined })
    });
});