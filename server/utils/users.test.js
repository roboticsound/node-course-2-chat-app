const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Rick Sanchez',
            room: 'Rick and Morty'
        }, {
            id: '2',
            name: 'Randy Marsh',
            room: 'South Park'
        }, {
            id: '3',
            name: 'Morty Smith',
            room: 'Rick and Morty'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Bojack Horseman',
            room: 'Bojack Horseman'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '3';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '42';
        var user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '1';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var user = users.getUser('42');

        expect(user).toBeFalsy();
    });

    it('should return names for Rick and Morty', () => {
        var userList = users.getUserList('Rick and Morty');

        expect(userList).toEqual(['Rick Sanchez', 'Morty Smith']);
    });

    it('should return names for South Park', () => {
        var userList = users.getUserList('South Park');

        expect(userList).toEqual(['Randy Marsh']);
    });
});
