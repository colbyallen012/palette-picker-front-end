import React, {Component} from 'react';
import './Generator.scss';
import Color from '../../Components/Color/Color';
import RandomColor from 'randomcolor';
import {postPalette} from '../../ApiCalls';

export class Generator extends Component {
  constructor () {
    super ();
    this.state = {
      randomColors: [
      {color:'#b2ffb7', isLocked: false},
      {color:'#3904e5', isLocked: false},
      {color:'#faadff', isLocked: false},
      {color:'#ad38d1', isLocked: false},
      {color:'#f7ef13', isLocked: false}
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
    this.setState({randomColors: newState})
  }

  handleSubmitPalette = async (e) => {
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
    await postPalette(newPalette)
    this.props.getAllPalettes()
    this.form.reset()
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
        <section className='input'>
        <button onClick={this.clearRandomColor} className="gen-palette">
          Generate New Palette
        </button>
        <form
          id="save-palette" 
          onSubmit={this.handleSubmitPalette}
          ref={form => this.form = form}
        >
          <select name="Select project" onChange={this.handleSelectProject} required>
          <option value="">--Choose a project--</option>
            {projectList}
          </select>
          <input className='new-name' type="text" placeholder="New palette name"/>
          <button className='save'>Save Palette</button>
        </form>
        </section>
      </div>
    )
  }
}

export default Generator;