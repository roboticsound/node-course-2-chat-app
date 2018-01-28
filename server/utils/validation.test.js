const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var res = isRealString(42);
        expect(res).toBeFalsy();
    });

    it('should reject string with only spaces', () => {
        var res = isRealString('     ');
        expect(res).toBeFalsy();
    });

    it('should allow strings with non-space character', () => {
        var res = isRealString('string theory');
        expect(res).toBeTruthy();
    });
});
