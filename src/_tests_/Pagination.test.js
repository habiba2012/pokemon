import Pagination from '../components/Pagination';
import React from 'react';
import { shallow } from 'enzyme'


describe("<Pagination/>", () => {
    it("should render a div tag", () => {
        const wrapper = shallow(<Pagination />)

        expect(wrapper.find('div')).toHaveLength(2)
    })
})