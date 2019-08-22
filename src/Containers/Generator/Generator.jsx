import React, {Component} from 'react';
import './Generator.scss';
import Color from '../../Components/Color/Color';
import RandomColor from 'randomcolor';

class Generator extends Component {
  constructor () {
    super ();
    this.state = {
      randomColors: ['#FFFFF','#FFFFF','#FFFFF','#FFFFF','#FFFFF']
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
        <section className='color--box'>
          {displayRandomColors}
        </section>
        <form action="">
          <select name="Select project">
            <option value="Test 1">Test 1</option>
            <option value="Test 2">Test 2</option>
            <option value="Test 2">Test 3</option>
          </select>
          <input type="text"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Generator;