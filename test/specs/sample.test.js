const user = require('../utils/user');
const login = require('../screens/Login');

describe('Sample tests', () => {
    it('Should send message with file', () => {
        login.login(user);
    })
})