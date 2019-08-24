import React, { Component } from 'react';
import './Palette.scss'

export class Palette extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <a href='pallete' className='tile' style={{backgroundColor: `#${this.props.color_1}`}}>{this.props.color_1}</a>
        <a href='pallete'className='tile' style={{backgroundColor: `#${this.props.color_2}`}}>{this.props.color_2}</a>        
        <a href='pallete'className='tile' style={{backgroundColor: `#${this.props.color_3}`}}>{this.props.color_3}</a>        
        <a href='pallete' className='tile' style={{backgroundColor: `#${this.props.color_4}`}}>{this.props.color_4}</a>        
        <a href='pallete' className='tile' style={{backgroundColor: `#${this.props.color_5}`}}>{this.props.color_5}</a>
      </div>
    )
  }
}

export default Palette
