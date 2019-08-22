import React, { Component } from 'react';
import { fetchPalettesById } from '../../ApiCalls';


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

  getPalettes = () => {
    fetchPalettesById(this.state.project_id)
      .then(data => console.log(data))
      .catch(error => error.message)
  }

  render() {
    console.log(this.state.palettes)
    return (
      <div>
        <h3>{this.state.project_name}</h3>
        <h4>{this.state.project_id}</h4>
      </div>
    )
  }
}

export default Project
