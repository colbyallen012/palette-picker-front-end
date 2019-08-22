import React, {Component} from 'react';
import './Generator.scss';
import Color from '../../Components/Color/Color';
import RandomColor from 'randomcolor';

class Generator extends Component {
  constructor () {
    super ();
    this.state = {
      randomColors: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']
    }
  }

  getRandomColor = () => {
    for(var i = 0; i < 5; i++) {
      this.setState({randomColors: [...this.state.randomColors, RandomColor()]})
    }

    console.log(this.state.randomColors);
  }

  clearRandomColor = () => {
    this.setState.randomColors = []
  }


  render () {
   const displayRandomColors = this.state.randomColors.map(color => {
      return <Color hexCode={color}/>
    })
  
    return (
      <div className='generator'>
        <h2>Palette Generator Goes here</h2>
        <button onClick={() => {this.clearRandomColor() 
          this.getRandomColor()}}>Generate New Palette</button>
        {displayRandomColors}
        {/* {this.state.randomColors.length > 0 && <Color hexCode={this.state.randomColor[0]}/>} */}
      </div>
    )
  }
}

export default Generator;