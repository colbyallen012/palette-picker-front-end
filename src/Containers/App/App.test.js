
import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import {fetchAllProjects} from '../../ApiCalls'
describe('App', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<App/>)
    instance = wrapper.instance()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  xit('getAllProjects should call fetchAllProjects', async () => {
    const spy = jest.spyOn(fetchAllProjects())
    instance.fetchAllProjects = jest.fn()
    expect(spy).toHaveBeenCalledTimes(0)
    await instance.getAllProjects()
    expect( spy).toHaveBeenCalledTimes(1)
  })
})