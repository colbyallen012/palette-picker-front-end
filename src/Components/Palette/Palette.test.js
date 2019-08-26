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

  it('should call deletePalette from props when handleDelete is called', () => {
    wrapper.instance().handleDelete({preventDefault: jest.fn()});
    expect(wrapper.handleDelete).toHaveBeenCalled
  })

  it('should set the state of popUp to true when handlePopup is called', () => {
    const mockEvent = { target: { popup: false} };
    const expected = true;
    wrapper.instance().handlePopup(mockEvent)
    expect(wrapper.state('popup')).toEqual(expected)
  })

})