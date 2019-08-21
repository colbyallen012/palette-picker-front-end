export const fetchProjects = () => {
  return fetch('http://localhost:3001/api/v1/projects')
  .then(res => res.json())
  .then(res => res)
  .catch (error => error.message)   
}