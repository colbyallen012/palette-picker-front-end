import React, {Component} from 'react';
import './Color.scss';
import hexToRgba from 'hex-to-rgba';
import unlock from './padlock-unlock.svg'
import lock from './padlock.svg'

class Color extends Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }

  render () {
    const RGBA = hexToRgba(this.props.hexCode, .5)
    const paletteStyle = {
      backgroundColor: this.props.hexCode,
      WebkitBoxShadow: `9px 17px 5px -4px ${RGBA}`,
      MozBoxShadow: `9px 17px 5px -4px ${RGBA}`,
      boxShadow: `9px 17px 5px -4px ${RGBA}`,
    }
    return (
      <div className='Color' style={paletteStyle}>
          {!this.props.isLocked && <input type='image' alt='unlock' src={unlock} className='unlock' onClick={() => this.props.toggleLock(this.props.id)}></input>}
          {this.props.isLocked && <input type='image' alt='lock' src={lock} className='lock' onClick={() => this.props.toggleLock(this.props.id)}></input>}
          <h3 className='hex'>Hex Code:{this.props.hexCode}</h3>
      </div>
    )
  }
}

export default Color;