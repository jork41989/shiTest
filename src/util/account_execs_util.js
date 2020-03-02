import axios from 'axios'; 

export const getExecs = () => {
  return axios.get('https://codechallenges-accountexecutiveapi.azurewebsites.net/api/users')
}