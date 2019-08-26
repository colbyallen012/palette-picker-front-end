import React from 'react';
import { shallow } from 'enzyme';
import Projects from './Projects';

describe('Projects', () => {
  let wrapper, instance;
  const props = {
    projects: [],
    name:'project name',
    id: 1,
    palettes: [],
    deleteProject: jest.fn(),
    deletePalette: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<Projects {...props}/>)
    instance = wrapper.instance()

  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change state when handleProjectName is invoked', () => {
    const mockEvent = { target: { newProjectName: 'title', value: 'Project Name'} };
    const expected = 'Project Name';
    wrapper.instance().handleProjectName(mockEvent);
    expect(wrapper.state('newProjectName')).toEqual(expected)
  })

  it('should run postProject when handleSubmitProject is called', () => {
    const currentState = {newProjectName:'Project Name'};
    wrapper.instance().setState(currentState);
    wrapper.instance().handleSubmitProject({preventDefault: jest.fn()});
    expect(wrapper.state('newProjectName')).toEqual(currentState.newProjectName)
  })
})