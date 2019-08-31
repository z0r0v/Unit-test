import axios from 'axios';

export class UsersService {
  get() {
    return axios.get('https://m-fd2-54-19.herokuapp.com/users').then(response => response.data);
  }

  getDescending() {
    return axios
      .get('https://m-fd2-54-19.herokuapp.com/users?_sort=name&_order=desc')
      .then(response => response.data);
  }
}
