import React, {Component} from 'react';
import './App.scss'
import { fetchProjects } from '../../ApiCalls'

class App extends Component {

async componentDidMount () {
  await fetchProjects()
    .then(projects => console.log(projects))

}

  render () {
    return (
      <div className='App'>
        <h1>The Palette Picker</h1>
        {/* <button onClick={console.log(fetchProjects())}>Test Button</button> */}
      </div>
    )
  }
}

export default App;
