import React, {Component} from 'react';
import './App.scss';
import { fetchProjects } from '../../ApiCalls';
import Generator from '../Generator/Generator';

class App extends Component {

async componentDidMount () {
  await fetchProjects()
    .then(projects => console.log(projects))

}

  render () {
    return (
      <div className='App'>
        <h1>The Palette Picker</h1>
        <Generator />
      </div>
    )
  }
}

export default App;
