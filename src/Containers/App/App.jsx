import React, {Component} from 'react';
import './App.scss';
// import { fetchAllProjects } from '../../ApiCalls';
import Generator from '../Generator/Generator';
import Projects from '../Projects/Projects'

export class App extends Component {

// async componentDidMount () {
//   await fetchAllProjects()
//     .then(projects => console.log(projects))

// }

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
