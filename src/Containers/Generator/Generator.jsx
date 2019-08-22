import React, {Component} from 'react';
import './Generator.scss';
import Color from '../../Components/Color/Color';
import RandomColor from 'randomcolor';

class Generator extends Component {
  constructor () {
    super ();
    this.state = {
      randomColors: []
    }
  }

  

  getRandomColor = () => {
    let newRandomColors = []
    for(var i = 0; i < 5; i++) {
      newRandomColors.push(RandomColor())
    }
    this.setState({randomColors: newRandomColors})
    return this.state.randomColors;
  }

  clearRandomColor = () => {
    this.setState({randomColors: []})
    this.getRandomColor()
  }


  render () {
   const displayRandomColors = this.state.randomColors.map((color, index) => {
      return <Color hexCode={color} key={index}/>
    })
  
    return (
      <div className='generator'>
        <h2>Palette Generator Goes here</h2>
        <button onClick={this.clearRandomColor}>
          Generate New Palette
        </button>
        {displayRandomColors}
        {/* {this.state.randomColors.length > 0 && <Color hexCode={this.state.randomColor[0]}/>} */}
      </div>
    )
  }
}

export default Generator;