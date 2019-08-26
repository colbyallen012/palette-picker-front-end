import React from 'react';
import { shallow } from 'enzyme';
import Palette from './Palette';

describe('Palette', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow (<Palette />)
    instance = wrapper.instance()
  })

})