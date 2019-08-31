import { UsersService } from './users.service';

let _userService;

export class Users {
  constructor() {
    _userService = new UsersService();
  }

  init() {
    _userService.get().then(data => {
      const newData = [...data];
      newData.sort((a, b) => {
        return a.name < b.name ? 1 : a.name === b.name ? 0 : -1;
      });
    });
  }
}
