import React from 'react';
import {shallow} from 'enzyme';
import Generator from './Generator';

describe('Generator', () => {
  let wrapper, instance;
  const originalColor = {color:'#000000', isLocked: false}
  const newColor = {color:'#FFFFF', isLocked: false}
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

  it('getRandomColor should change color state', () => {
    expect(wrapper.state('randomColors')[0]).toEqual(originalColor)
    instance.getRandomColor()
    expect(wrapper.state('randomColors')[0]).not.toEqual(originalColor)
  })

  it('getRandomColor should not change color state', () => {
    expect(wrapper.state('randomColors')[0]).toEqual(originalColor)
    wrapper.setState({randomColors: [{color:'#000000', isLocked: true}]})
    instance.getRandomColor()
    expect(wrapper.state('randomColors')[0].color).toEqual(originalColor.color)
  })

  it('clearRandomColor should set randomColors to empty array', () => {
    expect(wrapper.state('randomColors').length).toEqual(5)
    instance.getRandomColor = jest.fn()
    instance.clearRandomColor()
    expect(wrapper.state('randomColors').length).toEqual(0)
  })


})