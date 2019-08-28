import React from 'react';
import { shallow } from 'enzyme';
import Projects from './Projects';

describe('Projects', () => {
  let wrapper, instance;
  const event = {
    preventDefault: jest.fn()
  }
  const props = {
    projects: [{name: 'project', id: 1}],
    palettes: [{name: 'palette', id: 2, project_id: 1}],
    deleteProject: jest.fn(),
    deletePalette: jest.fn(),
    getAllProjects: jest.fn()
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
    instance.handleProjectName(mockEvent);
    expect(wrapper.state('newProjectName')).toEqual(expected)
  })

  it('should run postProject when handleSubmitProject is called', () => {
    const currentState = {newProjectName:'Project Name'};
    instance.setState(currentState);
    instance.handleSubmitProject(event);
    expect(wrapper.state('newProjectName')).toEqual(currentState.newProjectName)
  })

  it('handleSubmitProject should call getAllProjects', async () => {
    instance.form = {reset: jest.fn()}
    expect(props.getAllProjects).toHaveBeenCalledTimes(0)
    expect(instance.form.reset).toHaveBeenCalledTimes(0)
    await instance.handleSubmitProject(event)
    expect(props.getAllProjects).toHaveBeenCalledTimes(1)
    expect(instance.form.reset).toHaveBeenCalledTimes(1)
  })
})