var assert = require('assert');
var lib = require('../examples/basics/functions/lib/index');

describe('Functions', function () {
    describe('#pow()', function () {
        it('should return 16 when the value is 2, 4', function () {
            assert.equal(lib.pow(2, 4), 16);
        });
    });
});