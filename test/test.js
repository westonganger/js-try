var assert = require('assert');

var Try = require('./../src/try');

describe('Try', function() {
  describe('#try', function() {
    it('global', function() {
      assert.equal(Try(undefined), false);
      assert.equal(Try(null), false);
      assert.equal(Try(false), false);
      assert.equal(Try(true), true);
      assert.equal(Try(0), 0);
      assert.equal(Try(''), '');
      assert.equal(Try('foobar'), 'foobar');
      assert.deepEqual(Try([]), []);
      assert.deepEqual(Try({}), {});
    });

    it('string', function() {
      assert.equal(''.try('length'), 0);
      assert.equal(''.try('foobar'), false);
      assert.equal('foobar'.try('charAt', 3), 'b');
    });

    it('number', function() {
      var x = 0;
      assert.equal(x.try('toString'), '0');
      assert.equal(x.try('foobar'), false);
    });

    it('array', function() {
      assert.deepEqual([].try('sort'), []);
      assert.equal([].try('foobar'), false);
      assert.equal([].try(0), false);
      assert.equal([1].try(0), 1);
    });

    it('object', function() {
      assert.equal({}.try('toString'), "[object Object]");
      assert.equal({}.try('foobar'), false);
      assert.equal({foo: 'bar'}.try('foo'), 'bar');
      assert.equal({foo: 'bar'}.try('bar'), false);
    });
  });
});
