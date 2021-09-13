/* eslint-disable no-undef */
import Pokemon from '../components/Pokemon';
import React from 'react';
import { shallow } from 'enzyme'
import { useSelector, useDispatch } from 'react-redux';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
}));

it('loads data on init', () => {
    const mockedDispatch = jest.fn();
    useSelector.mockImplementation((selectorFn) => selectorFn(pokemonReducer));
    useDispatch.mockReturnValue(mockedDispatch);
    mount(<Pokemon />);
    expect(mockDispatch).toHaveBeenCalledWith(/*arguments your expect*/);
});

it('renders without error', () => {
    const wrapper = shallow(<Pokemon />);
    expect(wrapper.length).toEqual(1);
});

/* describe('Pokemon', () => {
    const mockValue = '';
    const mockEvent = {
        target: { value: mockValue },
        preventDefault: jest.fn(),
    };

    it('renders without error', () => {
        const wrapper = shallow(<Pokemon />);
        expect(wrapper.length).toEqual(1);
    });

    describe('handleChange', () => {
        it('should set value in component state', () => {
            const wrapper = shallow(<Pokemon />);
            wrapper.instance().handleChange(mockEvent);
            expect(wrapper.state().value).toEqual(mockValue);
        })
    });

    describe('handleSubmit', () => {


        it('doesn\'t error when onSubmit is undefined', () => {

            const wrapper = shallow(<Pokemon />);
            expect(() => wrapper.instance().handleSubmit(mockEvent)).not.toThrow();
        });
    });
}); */