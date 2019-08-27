import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color', () => {
  let wrapper, instance;
  const props = {
    hexCode: 'FFFFFF',
    id: 1,
    toggleLock: jest.fn(),
    isLocked: false
  }

  beforeEach(() => {
    wrapper = shallow (<Color {...props}/>)
    instance = wrapper.instance()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('lock click should call toggleLock from unlocked', () => {
    expect(props.toggleLock).toHaveBeenCalledTimes(0)
    wrapper.find('input').simulate('click')
    expect(props.toggleLock).toHaveBeenCalledTimes(1)
  })

  it('lock click should call toggleLock from locked', () => {
    const props = {
      hexCode: 'FFFFFF',
      id: 1,
      toggleLock: jest.fn(),
      isLocked: true
    }
    wrapper = shallow (<Color {...props}/>)
    expect(props.toggleLock).toHaveBeenCalledTimes(0)
    wrapper.find('input').simulate('click')
    expect(props.toggleLock).toHaveBeenCalledTimes(1)
  })
})