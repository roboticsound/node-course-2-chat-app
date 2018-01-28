const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var message = generateMessage('testUser', 'this is a test message');

        expect(message.from).toBe('testUser');
        expect(message.text).toBe('this is a test message');
        expect(typeof message.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var latitude = '32.1254858';
        var longitude = '93.22145';
        var message = generateLocationMessage('testUser', latitude, longitude);

        expect(message.from).toBe('testUser');
        expect(message.url).toBe('https://www.google.com/maps/?q=32.1254858,93.22145');
        expect(typeof message.createdAt).toBe('number');

    });
});
