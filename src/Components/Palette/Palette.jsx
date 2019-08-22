import React, { Component } from 'react';



export class Palette extends Component {
  constructor(props) {
    super(props)
    this.state = {
      palette_id: this.props.palette_id,
      project_id: this.props.project_id,
      name: this.props.name,
      color_1: this.props.color_1,
      color_2: this.props.color_2,
      color_3: this.props.color_3,
      color_4: this.props.color_4,
      color_5: this.props.color_5
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.color_1}</p>
      </div>
    )
  }
}

export default Palette
