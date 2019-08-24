import React, {Component} from 'react';
import './Generator.scss';
import Color from '../../Components/Color/Color';
import RandomColor from 'randomcolor';
import {postPalette} from '../../ApiCalls'

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
      ],
      selectedProject: ''
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

  handleSubmitPalette = (e) => {
    e.preventDefault()
    const projectName = this.state.selectedProject
    const paletteName = e.target[1].value
    const colors = this.state.randomColors
    const newPalette = {
      name: paletteName,
      project_name: projectName,
      color_1: colors[0].color,
      color_2: colors[1].color,
      color_3: colors[2].color,
      color_4: colors[3].color,
      color_5: colors[4].color
    }
    console.log(newPalette)
    postPalette(newPalette)
  }

  handleSelectProject = (e) => {
    this.setState({selectedProject: e.target.value})
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

    const projectList = this.props.projects.map((project, key) => {
      return <option value={project.name} key={key}>{project.name}</option>
    })

    return (
      <div className='generator'>
        <section className='color-container'>
          {displayColors}
        </section>
        <button onClick={this.clearRandomColor}>
          Generate New Palette
        </button>
        <form action="" onSubmit={this.handleSubmitPalette}>
          <select name="Select project" onChange={this.handleSelectProject} required>
          <option value="">--Please choose an option--</option>
            {projectList}
          </select>
          <input type="text"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Generator;