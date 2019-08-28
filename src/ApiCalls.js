export const fetchAllProjects = () => {
  return fetch('http://localhost:3001/api/v1/projects')
    .then(res => res.json())
    .then(res => res)
    .catch (error => error.message)   
}

export const fetchPalettesById = (id) => {
  return fetch(`http://localhost:3001/api/v1/projects/${id}/palettes`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => error.message)
}

export const fetchAllPalettes = () => {
  return fetch(`http://localhost:3001/api/v1/palettes`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => error.message)
}

export const postPalette = (palette) => {
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

export const patchProject = (project) => {
  const options = {
    method: 'PATCH',
    body: JSON.stringify(project),
    headers: {
      "Content-Type": "application/json"
    }
  }
  return fetch(`http://localhost:3001/api/v1/projects/${project}`, options)
  .then(res => res.json())
  .then(data => data)
  .catch(error => error.message)
}

export const patchPalette = (palette) => {
  const options = {
    method: 'PATCH',
    body: JSON.stringify(palette),
    headers: {
      "Content-Type": "application/json"
    }
  }
  return fetch(`http://localhost:3001/api/v1/palettes/${palette}`, options)
  .then(res => res.json())
  .then(data => data)
  .catch(error => error.message)
}

export const deleteProject = (project) => {
  const options = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    }
  }
  return fetch(`http://localhost:3001/api/v1/projects/${project}`, options)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => error.message)
}

export const deletePalette = (palette) => {
  const options = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    }
  }
  return fetch(`http://localhost:3001/api/v1/palettes/${palette}`, options)
  .then(res => res.json())
  .then(data => data)
  .catch(error => error.message)
}

