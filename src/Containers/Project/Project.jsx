import React, { Component } from 'react';
// import { deleteProject } from '../../ApiCalls';
import { Palette } from '../../Components/Palette/Palette'

export class Project extends Component {
  constructor (props) {
    super(props)
    this.state = {
      project_name: this.props.name,
      project_id: this.props.id
    }
  }

  handleDelete = (e) => {
    e.preventDefault()
    this.props.deleteProject(this.state.project_id)
  }

  render() {
    const addPalettes = this.props.palettes.map((palette, key) => {
      return <Palette 
        key={key}
        palette_id={palette.id}
        project_id={palette.project_id}
        name={palette.name}
        color_1={palette.color_1}
        color_2={palette.color_2}
        color_3={palette.color_3}
        color_4={palette.color_4}
        color_5={palette.color_5}
        deletePalette={this.props.deletePalette}
      />
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
