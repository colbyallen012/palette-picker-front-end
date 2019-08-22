import React, { Component } from 'react'

class Projects extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className='Projects'>
        <form action="">
          <input type="text" placeholder="New project name"/>
          <input type="submit"/>
        </form>
        <section className="project--container">

        </section>
      </div>
    )
  }
}

export default Projects
