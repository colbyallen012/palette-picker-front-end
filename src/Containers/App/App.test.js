
import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import {fetchAllProjects} from '../../ApiCalls';
import * as constants from '../../ApiCalls';


describe('App', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<App/>)
    instance = wrapper.instance()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('getAllProjects should call fetchAllProjects', async () => {
    constants.fetchAllProjects = jest.fn(() => Promise.resolve([]))
    expect(constants.fetchAllProjects).toHaveBeenCalledTimes(0)
    await instance.getAllProjects()
    expect( constants.fetchAllProjects).toHaveBeenCalledTimes(1)
  })

  it('getAllPalettes should call fetchAllPalettes', async () => {
    constants.fetchAllPalettes = jest.fn(() => Promise.resolve([]))
    expect(constants.fetchAllPalettes).toHaveBeenCalledTimes(0)
    await instance.getAllPalettes()
    expect( constants.fetchAllPalettes).toHaveBeenCalledTimes(1)
  })

  it('removeProject should call deleteProject', () => {
    constants.deleteProject = jest.fn(() => Promise.resolve([]))
    expect(constants.deleteProject).toHaveBeenCalledTimes(0)
    instance.removeProject()
    expect( constants.deleteProject).toHaveBeenCalledTimes(1)
  })

  it('removeProject should set projects state', () => {
    wrapper.setState({projects: [{id: 1, name: 'The barn'}]})
    expect(wrapper.state('projects')).toEqual([{id: 1, name: 'The barn'}])
    instance.removeProject(1)
    expect(wrapper.state('projects')).toEqual([])
  })

  it('removePalette should call deletePalette', () => {
    constants.deletePalette = jest.fn(() => Promise.resolve([]))
    expect(constants.deletePalette).toHaveBeenCalledTimes(0)
    instance.removePalette()
    expect( constants.deletePalette).toHaveBeenCalledTimes(1)
  })

  it('removePalette should set palette state', () => {
    wrapper.setState({palettes: [{id: 1, name: 'The barn'}]})
    expect(wrapper.state('palettes')).toEqual([{id: 1, name: 'The barn'}])
    instance.removePalette(1)
    expect(wrapper.state('palettes')).toEqual([])
  })

  

})