import React, { Component } from 'react';
import './Palette.scss';
import Popup from "reactjs-popup";
// import Popup from './Popup'

export class Palette extends Component {
  constructor() {
    super()
    this.state = {
      popup: false
    }
  }
  
  handleDelete = (e) => {
    e.preventDefault()
    this.props.deletePalette(this.props.palette_id)
  }

  handlePopup = () => {
    this.setState({popup: true})
  }

  render() {
    const {color_1, color_2, color_3, color_4, color_5} = this.props;

    return (
      <Popup trigger={
      <div className='mini-palette' onClick={this.handlePopup}>
        <h4 className='tileTitle'>{this.props.name}</h4>
        <p className='tile' style={{backgroundColor: `${color_1}`}}></p>
        <p className='tile' style={{backgroundColor: `${color_2}`}}></p>        
        <p className='tile' style={{backgroundColor: `${color_3}`}}></p>        
        <p className='tile' style={{backgroundColor: `${color_4}`}}></p>        
        <p className='tile' style={{backgroundColor: `${color_5}`}}></p>
      </div>
      } modal>
      <div className='project-palette' onClick={this.handlePopup}>
        <h4 className='tileTitle'>{this.props.name}</h4>
        <section>
          <div className='color-pad' style={{backgroundColor: `${color_1}`}}>
            <p>{color_1}</p>
          </div>
          <div className='color-pad' style={{backgroundColor: `${color_2}`}}>
            <p>{color_2}</p>
          </div>        
          <div className='color-pad' style={{backgroundColor: `${color_3}`}}>
            <p>{color_3}</p>
          </div>        
          <div className='color-pad' style={{backgroundColor: `${color_4}`}}>
            <p>{color_4}</p>
          </div>        
          <div className='color-pad' style={{backgroundColor: `${color_5}`}}>
            <p>{color_5}</p>
          </div>
        </section>
        <button onClick={this.handleDelete}>Delete Palette</button>
      </div>
    </Popup>
    )
  }
}

export default Palette
