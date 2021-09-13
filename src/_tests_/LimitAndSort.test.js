/* eslint-disable import/named */
/* eslint-disable no-undef */
import React from 'react';
import { createStore } from 'redux';
import { provider } from 'react-redux';
import { render, fireEvent, cleanup } from 'react-testing-library'
import "jest-dom/extend-expect";


// eslint-disable-next-line no-unused-vars
// import LimitAndSort from "../components/LimitAndSort";

describe('<LimitAndSort /> with no props', () => {
    it("should fire handleSorting method", () => {
        const wrapper = shallow(<LimitAndSort />)
        console.log(wrapper.instance())

    })

    /*  it('should have two select option', () => {
         expect(wrapper.find('select[name="sort"]').length).toEqual(2);
     }); */



});
