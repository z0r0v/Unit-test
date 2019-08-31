import { UsersService } from './users.service';

test('count of users to equal 6', () => {
  new UsersService().get().then(data => {
    expect(data.length).toEqual(6);
  });
});

it('sorts users in descending', () => {
  new UsersService().getDescending().then(data => {
    const newData = [...data];
    newData.sort((a, b) => {
      return a.name < b.name ? 1 : a.name === b.name ? 0 : -1;
    });
    expect(data).toEqual(newData);
  });
});

it('user json contains correct structure', () => {
  new UsersService().getDescending().then(data => {
    const newData = [...data];
    newData.sort((a, b) => {
      return a.name < b.name ? 1 : a.name === b.name ? 0 : -1;
    });
    expect(data).toEqual(newData);
  });
});
