import React, {Component} from 'react';
import './App.scss';
import Generator from '../Generator/Generator';
import Projects from '../Projects/Projects'
import { 
  fetchAllProjects,
  fetchAllPalettes,
  deleteProject,
  deletePalette
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
    this.getAllPalettes()
    this.getAllProjects()
  }

  getAllProjects = async () => {
    await fetchAllProjects()
      .then(projects => this.setState({projects: projects}))
      .catch(error => error.message)
  }

  getAllPalettes = async () => {
    await fetchAllPalettes(this.state.project_id)
      .then(palettes => this.setState({palettes: palettes}))
      .catch(error => console.log(error.message))
  }

  removeProject = (project_id) => {
    const remainingProjects = this.state.projects.filter(project => {
      return project.id !== project_id
    })
    deleteProject(project_id)
    this.setState({projects: remainingProjects})
  }

  removePalette = (palette_id) => {
    const remainingPalettes = this.state.palettes.filter(palette => {
      return palette.id !== palette_id
    })
    deletePalette(palette_id)
    this.setState({palettes: remainingPalettes})
  }

  render () {
    return (
      <div className='App'>
        <header>
          <h1>Palette Picker</h1>
        </header>
        <Generator 
          projects={this.state.projects}
          getAllPalettes={this.getAllPalettes}
        />
        <Projects 
          projects={this.state.projects} 
          palettes={this.state.palettes}
          deleteProject={this.removeProject}
          deletePalette={this.removePalette}
          getAllProjects={this.getAllProjects}
        />
      </div>
    )
  }
}

export default App;
