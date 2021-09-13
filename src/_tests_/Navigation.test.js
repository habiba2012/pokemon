import Navigation from '../components/Navigation';
import React from 'react';
import { shallow } from 'enzyme'


describe("<Navigation/>", () => {
    it("should render a div tag", () => {
        const wrapper = shallow(<Navigation />)

        expect(wrapper.find('div')).toHaveLength(1)
        expect(wrapper.find('h3')).toHaveLength(1)
    })
})