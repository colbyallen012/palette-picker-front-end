import React, { Component } from 'react';
// import { fetchAllProjects } from '../../ApiCalls';
import { Project } from '../Project/Project';
import './Projects.scss'

export class Projects extends Component {


  render() {
    const addProjects = this.props.projects.map((project, key) => {
      console.log(project)
      return <Project name={project.name} id={project.id} key={key}/>
    })
    return (
      <div className='Projects'>
        <form action="">
          <input type="text" placeholder="New project name"/>
          <input type="submit"/>
        </form>
        <section className="project-container">
          {addProjects}
        </section>
      </div>
    )
  }
}

export default Projects
