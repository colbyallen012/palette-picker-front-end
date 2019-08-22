import React, {Component} from 'react';
import './Generator.scss';
import Color from '../../Components/Color/Color';
import RandomColor from 'randomcolor';

export class Generator extends Component {
  constructor () {
    super ();
    this.state = {
      // randomColors: [
        color_1:{color:'#FFFFFF', isLocked: false},
        color_2:{color:'#FFFFFF', isLocked: false},
        color_3:{color:'#FFFFFF', isLocked: false},
        color_4:{color:'#FFFFFF', isLocked: false},
        color_5:{color:'#FFFFFF', isLocked: false}
      // ]
    }
  }

  getRandomColor = () => {
    let newRandomColors = []
    for(var i = 0; i < 5; i++) {
      newRandomColors.push({color: RandomColor(), isLocked: false})
    }
    this.setState(
      {
        color_1: newRandomColors[0], 
        color_2: newRandomColors[1], 
        color_3: newRandomColors[2], 
        color_4: newRandomColors[3], 
        color_5: newRandomColors[4] 
      })
    return this.state.randomColors;
  }

  clearRandomColor = () => {
    this.setState({randomColors: []})
    this.getRandomColor()
  }

  // toggleLock = (id) => {
  //   this.setState({randomColors})
  // }


  render () {
    const {color_1, color_2, color_3, color_4, color_5} = this.state
    return (
      <div className='generator'>
        <h2>Palette Generator Goes here</h2>
        <button onClick={this.clearRandomColor}>
          Generate New Palette
        </button>
        <section className='color--container'>
          <Color hexCode={color_1.color} key={1}/>
          <Color hexCode={color_2.color} key={2}/>
          <Color hexCode={color_3.color} key={3}/>
          <Color hexCode={color_4.color} key={4}/>
          <Color hexCode={color_5.color} key={5}/>
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