/* eslint-disable no-undef */
import DetailsPokemon from '../pages/DetailsPokemon';
import React from 'react';
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe("<DetailsPokemon/>", () => {
    it("should render correctly", () => {

        const store = mockStore({
            pokemonReducer: {

            }
        });
        const wrapper = mount(
            <Provider store={store}>
                <DetailsPokemon />
            </Provider>
        )
        expect(wrapper.find('pokemonReducer').length).toEqual(1)
    });
});