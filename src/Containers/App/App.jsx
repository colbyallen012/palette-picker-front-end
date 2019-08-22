import React, {Component} from 'react';
import './App.scss';
import Generator from '../Generator/Generator';
import Projects from '../Projects/Projects'

export class App extends Component {


  render () {
    return (
      <div className='App'>
        <h1>The Palette Picker</h1>
        <Generator/>
        <Projects/>
      </div>
    )
  }
}

export default App;
