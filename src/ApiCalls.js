export const fetchAllProjects = () => {
  return fetch('http://localhost:3001/api/v1/projects')
    .then(res => res.json())
    .then(res => res)
    .catch (error => error.message)   
}

export const fetchPalettesById = (id) => {
  console.log(id)
  return fetch(`http://localhost:3001/api/v1/projects/${id}/palettes`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => error.message)
}

export const postPalette = (palette) => {
  console.log(palette)
  const options = {
    method: 'POST',
    body: JSON.stringify(palette),
    headers: {
      "Content-Type": "application/json"
    }
  }
  return fetch('http://localhost:3001/api/v1/palettes', options)
    .then(res => res.json())
    .then(data => data)
    .catch(error => error.message)
}

export const postProject = (project) => {
  console.log(project)
  const options = {
    method: 'POST',
    body: JSON.stringify(project),
    headers: {
      "Content-Type": "application/json"
    }
  }
  return fetch('http://localhost:3001/api/v1/projects', options)
    .then(res => res.json())
    .then(data => data)
    .catch(error => error.message)
}