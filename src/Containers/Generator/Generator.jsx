import React, {Component} from 'react';
import './Generator.scss';
import Color from '../../Components/Color/Color';
import RandomColor from 'randomcolor';

export class Generator extends Component {
  constructor () {
    super ();
    this.state = {
      randomColors: [
      {color:'#FFFFFF', isLocked: false},
      {color:'#FFFFFF', isLocked: false},
      {color:'#FFFFFF', isLocked: false},
      {color:'#FFFFFF', isLocked: false},
      {color:'#FFFFFF', isLocked: false}
      ]
    }
  }

  getRandomColor = () => {
    let newRandomColors = []
    for(var i = 0; i < 5; i++) {
      newRandomColors.push({color: RandomColor(), isLocked: false})
    }
    this.setState(
      [
        newRandomColors[0], 
        newRandomColors[1], 
        newRandomColors[2], 
        newRandomColors[3], 
        newRandomColors[4] 
      ])
    return this.state.randomColors;
  }

  clearRandomColor = () => {
    this.setState({randomColors: []})
    this.getRandomColor()
  }

  toggleLock = (id) => {
    const newState = this.state.randomColors.map((card, index) => {
      if(index+1 === id) {
        return {color: 'hello', isLocked: !card.isLocked}
      }
      return card
    })
    console.log('new state', newState)
    this.setState({randomColors: newState})
  }

  render () {
    return (
      <div className='generator'>
        <h2>Palette Generator Goes here</h2>
        <button onClick={this.clearRandomColor}>
          Generate New Palette
        </button>
        <section className='color--container'>
          <Color hexCode={this.state.randomColors[0].color} key={1} id={1} toggleLock={this.toggleLock}/>
          <Color hexCode={this.state.randomColors[1].color} key={2} id={2} toggleLock={this.toggleLock}/>
          <Color hexCode={this.state.randomColors[2].color} key={3} id={3} toggleLock={this.toggleLock}/>
          <Color hexCode={this.state.randomColors[3].color} key={4} id={4} toggleLock={this.toggleLock}/>
          <Color hexCode={this.state.randomColors[4].color} key={5} id={5} toggleLock={this.toggleLock}/>
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