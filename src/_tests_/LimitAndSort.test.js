/* eslint-disable import/named */
/* eslint-disable no-undef */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { shallow } from 'enzyme'
import LimitAndSort from "../components/LimitAndSort";

describe('<LimitAndSort /> with no props', () => {
    it("should fire handleSorting method", () => {
        const wrapper = shallow(<LimitAndSort />)
        console.log(wrapper.instance())

    })

    /*  it('should have two select option', () => {
         expect(wrapper.find('select[name="sort"]').length).toEqual(2);
     }); */



});
