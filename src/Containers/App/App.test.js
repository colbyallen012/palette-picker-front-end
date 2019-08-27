
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

})