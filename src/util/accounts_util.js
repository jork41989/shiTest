import axios from 'axios';

export const getAccounts = (email) => {
  return axios.post('https://codechallenges-accountexecutiveapi.azurewebsites.net/api/companies', {"accountExecutive": email})
}