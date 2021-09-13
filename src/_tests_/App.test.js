import React from 'react';
import App from '../App';
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router';
import SearchPokemon from '../components/SearchPokemon';
import DetailsPokemon from '../pages/DetailsPokemon';
import Home from '../pages/Home';

describe("<App/>", () => {
    it("should render correctly", () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/']} >
                <App />
            </MemoryRouter >
        )

        expect(wrapper.find(Home)).toHaveLength(1);
    })
})