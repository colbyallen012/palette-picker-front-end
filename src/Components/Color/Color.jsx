import React, {Component} from 'react';
import './Color.scss'

class Color extends Component {
  constructor () {
    super ()
  }

  render () {
    return (
      <div className='Color'>
        <button>Unlocked</button>
        <h3>Hex Code</h3>
      </div>
    )
  }
}

export default Color;