import React, { Component } from 'react';
import { fetchPalettesById, deleteProject } from '../../ApiCalls';
import { Palette } from '../../Components/Palette/Palette'

export class Project extends Component {
  constructor (props) {
    super(props)
    this.state = {
      project_name: this.props.name,
      project_id: this.props.id,
      palettes: []
    }
  }

  componentDidMount() {
    this.getPalettes()
  }

  handleDelete = (e) => {
    e.preventDefault()
    deleteProject(this.state.project_id)
  }

  getPalettes = () => {
    fetchPalettesById(this.state.project_id)
      .then(palettes => this.setState({palettes: palettes}))
      .catch(error => error.message)
  }

  render() {
    const addPalettes = this.state.palettes.map((palette, key) => {
      return <Palette 
      key={key}
      palette_id={palette.id}
      project_id={palette.project_id}
      name={palette.name}
      color_1={palette.color_1}
      color_2={palette.color_2}
      color_3={palette.color_3}
      color_4={palette.color_4}
      color_5={palette.color_5}/>
    })
    return (
      <div>
        <h3>{this.state.project_name}</h3>
        <button onClick={this.handleDelete}>Delete Project</button>
        {addPalettes}
      </div>
    )
  }
}

export default Project
