import React, {Component} from 'react';
import './App.scss';
import Generator from '../Generator/Generator';
import Projects from '../Projects/Projects'
import { fetchAllProjects } from '../../ApiCalls';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }
  async componentDidMount () {
    await fetchAllProjects()
      .then(projects => this.setState({projects: projects}))
      .catch(error => error.message)
  }

  render () {
    return (
      <div className='App'>
        <h1>Happy Trees Palette Picker</h1>
        <Generator projects={this.state.projects}/>
        <Projects projects={this.state.projects}/>
      </div>
    )
  }
}

export default App;
