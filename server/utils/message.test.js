const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var message = generateMessage('testUser', 'this is a test message');

        expect(message.from).toBe('testUser');
        expect(message.text).toBe('this is a test message');
        expect(typeof message.createdAt).toBe('number');
    });
});
