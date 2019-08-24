import React, { Component } from 'react';
import './Palette.scss'

export class Palette extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='project-palette'>
        <h4 className='tileTitle'>{this.props.name}</h4>
        <p className='tile' style={{backgroundColor: `#${this.props.color_1}`}}>{this.props.color_1}</p>
        <p className='tile' style={{backgroundColor: `#${this.props.color_2}`}}>{this.props.color_2}</p>        
        <p className='tile' style={{backgroundColor: `#${this.props.color_3}`}}>{this.props.color_3}</p>        
        <p className='tile' style={{backgroundColor: `#${this.props.color_4}`}}>{this.props.color_4}</p>        
        <p className='tile' style={{backgroundColor: `#${this.props.color_5}`}}>{this.props.color_5}</p>
      </div>
    )
  }
}

export default Palette
