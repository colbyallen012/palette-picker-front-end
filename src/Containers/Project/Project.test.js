import React from 'react';
import {shallow} from 'enzyme';
import {Project} from './Project';

describe('Project', () => {
  let wrapper
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
    palettes: palettes,
    deleteProject: jest.fn(),
    deletePalette: jest.fn(),
    getAllProjects: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<Project{...props}/>)
  })

  it('Project should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })


})