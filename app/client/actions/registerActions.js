import axios from 'axios';

export function userRegisterRequest(userData) {
  return dispath => {
    return axios.post('api/users', userData)
  }
}
