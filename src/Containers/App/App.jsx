import React, {Component} from 'react';
import './App.scss';
import Generator from '../Generator/Generator';
import Projects from '../Projects/Projects'
import { 
  fetchAllProjects,
  fetchAllPalettes
 } from '../../ApiCalls';


export class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      palettes: []
    }
  }
  componentDidMount () {
    this.getPalettes()
    this.getAllProjects()
  }

  getAllProjects = async () => {
    await fetchAllProjects()
      .then(projects => this.setState({projects: projects}))
      .catch(error => error.message)
  }

  getPalettes = async () => {
    await fetchAllPalettes(this.state.project_id)
      .then(palettes => this.setState({palettes: palettes}))
      .catch(error => error.message)
  }

  render () {
    return (
      <div className='App'>
        <h1>Happy Trees Palette Picker</h1>
        <Generator projects={this.state.projects}/>
        <Projects projects={this.state.projects} palettes={this.state.palettes}/>
      </div>
    )
  }
}

export default App;
