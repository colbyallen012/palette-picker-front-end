import React, { Component } from 'react';
import './Palette.scss';
import { deletePalette } from '../../ApiCalls';


export class Palette extends Component {
  
  handleDelete = (e) => {
    e.preventDefault()
    deletePalette(this.props.palette_id)
  }

  render() {
    return (
      <div className='project-palette'>
        <h4 className='tileTitle'>{this.props.name}</h4>
        <button onClick={this.handleDelete}>Delete Palette</button>
        <p className='tile' style={{backgroundColor: `${this.props.color_1}`}}>{this.props.color_1}</p>
        <p className='tile' style={{backgroundColor: `${this.props.color_2}`}}>{this.props.color_2}</p>        
        <p className='tile' style={{backgroundColor: `${this.props.color_3}`}}>{this.props.color_3}</p>        
        <p className='tile' style={{backgroundColor: `${this.props.color_4}`}}>{this.props.color_4}</p>        
        <p className='tile' style={{backgroundColor: `${this.props.color_5}`}}>{this.props.color_5}</p>
      </div>
    )
  }
}

export default Palette
