import Home from '../pages/Home';
import React from 'react';
import { shallow } from 'enzyme'


describe("<Home/>", () => {
    it("should render a div tag", () => {
        const wrapper = shallow(<Home />)

        expect(wrapper.find('div')).toHaveLength(2)
    })
})