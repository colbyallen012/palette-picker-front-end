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

