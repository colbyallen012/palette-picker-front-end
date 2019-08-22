import React, { Component } from 'react'
import { fetchAllPalettes } from '../../ApiCalls';


export class Project extends Component {
  constructor (props) {
    super(props)
    this.state = {
      project_name: this.props.name,
      project_id: this.props.id,
      palettes: []
    }
  }


  getPalettes = () => {

  }

  render() {
    return (
      <div>
        <h3>{this.state.project_name}</h3>
        <h4>{this.state.project_id}</h4>
      </div>
    )
  }
}

export default Project
