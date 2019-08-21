import React, {Component} from 'react';
import './Generator.scss'
import Color from '../../Components/Color/Color'

class Generator extends Component {
  constructor () {
    super () 
  }

  render () {
    return (
      <div className='generator'>
        <h2>Palette Generator Goes here</h2>
        <Color />
      </div>
    )
  }
}

export default Generator;