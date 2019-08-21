import React, {Component} from 'react';
import './Generator.scss';
import Color from '../../Components/Color/Color';
import RandomColor from 'randomcolor';

class Generator extends Component {
  constructor () {
    super () 
  }

  getRandomColor = () => {
    const randomColors = []
    for(var i = 0; i < 5; i++) {
      randomColors.push(RandomColor())
    }

    console.log(randomColors);
  }

  render () {
    return (
      <div className='generator'>
        <h2>Palette Generator Goes here</h2>
        <Color />
        <button onClick={this.getRandomColor}>Generate New Palette</button>
      </div>
    )
  }
}

export default Generator;