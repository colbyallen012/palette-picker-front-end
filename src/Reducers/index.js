import { combineReducers } from 'redux';

const test = () => {
  switch('test') {
    default: 
      return 'test'
  }
}

const allReducers = combineReducers({
  test: test()
})

export default allReducers;