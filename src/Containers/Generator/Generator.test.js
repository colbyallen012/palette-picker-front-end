import React from 'react';
import {shallow} from 'enzyme';
import Generator from './Generator';

describe('Generator', () => {
  let wrapper, instance;
  const projects = [{name: 'Bat Cave'}]
  const palettes = [{
    name: 'floor',
    color_1: '#000000',
    color_2: '#000000',
    color_3: '#000000',
    color_4: '#000000',
    color_5: '#000000'
  }]
  const props = {
    projects: projects,
    getAllPalettes: jest.fn(() => palettes)
  }
  beforeEach(() => {
    wrapper = shallow(<Generator {...props}/>)
    instance = wrapper.instance()
  })

  it('Generator should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })


})