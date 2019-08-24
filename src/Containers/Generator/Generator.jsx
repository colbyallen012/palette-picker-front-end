import React, {Component} from 'react';
import './Generator.scss';
import Color from '../../Components/Color/Color';
import RandomColor from 'randomcolor';

export class Generator extends Component {
  constructor () {
    super ();
    this.state = {
      randomColors: [
      {color:'#000000', isLocked: false},
      {color:'#000000', isLocked: false},
      {color:'#000000', isLocked: false},
      {color:'#000000', isLocked: false},
      {color:'#000000', isLocked: false}
      ]
    }
  }

  getRandomColor = () => {
    const newState = this.state.randomColors.map((card, index) => {
      if(!card.isLocked) {
        return {color: RandomColor(), isLocked: card.isLocked}
      }
      return card
    })
    this.setState({randomColors: newState})
  }

  clearRandomColor = () => {
    this.setState({randomColors: []})
    this.getRandomColor()
  }

  toggleLock = (id) => {
    const newState = this.state.randomColors.map((card, index) => {
      if(index === id) {
        return {color: card.color, isLocked: !card.isLocked}
      }
      return card
    })
    console.log('new state', newState)
    this.setState({randomColors: newState})
  }

  render () {
    const displayColors = this.state.randomColors.map((card, index) => {
      return <Color 
        hexCode={card.color} 
        key={index} 
        id={index} 
        toggleLock={this.toggleLock} 
        isLocked={card.isLocked}
        />
    })
    return (
      <div className='generator'>
        <section className='color-container'>
          {displayColors}
        </section>
        <button onClick={this.clearRandomColor}>
          Generate New Palette
        </button>
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