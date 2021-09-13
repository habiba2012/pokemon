import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockServiceCreator = (body, succeeds = true) => () =>
    new Promise((resolve, reject) => {
        setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
    });

describe('authenticate action', () => {
    let store;
    beforeEach(() => {
        store = mockStore({ pokemons: [] });
    })

})