import React from 'react';
import { shallow } from 'enzyme';
import Palette from './Palette';

describe('Palette', () => {
  let wrapper, instance;

  const props = {
    deletePalette: jest.fn(),
  }

  beforeEach(() => {
    wrapper = shallow (<Palette {...props}/>)
    instance = wrapper.instance()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }); 

  it('should call deletePalette from state when handleDelete is called', () => {
    wrapper.instance().handleDelete({preventDefault: jest.fn()});

  })

})