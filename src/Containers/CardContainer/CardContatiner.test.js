import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('Card Container', () => {
  let wrapper;
  const mockColors = [{
    color_1: 'test',
    color_2: 'test',
    color_3: 'test',
    color_4: 'test',
    color_5: 'test'
  }]

  beforeEach(() => {
    wrapper = shallow(<CardContainer colors={mockColors}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }); 
})

