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
})