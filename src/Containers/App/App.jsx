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
    console.log(this.state.projects)
    await fetchAllProjects()
      .then(projects => this.setState({projects: projects}))
      .catch(error => error.message)
  }

  getAllPalettes = async () => {
    console.log(this.state.palettes)
    await fetchAllPalettes(this.state.project_id)
      .then(palettes => this.setState({palettes: palettes}))
      .catch(error => console.log(error.message))
  }

  deleteProject = (project_id) => {
    const remainingProjects = this.state.projects.filter(project => {
      return project.id !== project_id
    })
    deleteProject(project_id)
    this.setState({projects: remainingProjects})
  }

  deletePalette = (palette_id) => {
    const remainingPalettes = this.state.palettes.filter(palette => {
      return palette.id !== palette_id
    })
    deletePalette(palette_id)
    this.setState({palettes: remainingPalettes})
  }

  render () {
    return (
      <div className='App'>
        <h1>Happy Trees Palette Picker</h1>
        <Generator 
          projects={this.state.projects}
          getAllPalettes={this.getAllPalettes}
        />
        <Projects 
          projects={this.state.projects} 
          palettes={this.state.palettes}
          deleteProject={this.deleteProject}
          deletePalette={this.deletePalette}
          getAllProjects={this.getAllProjects}
        />
      </div>
    )
  }
}

export default App;
