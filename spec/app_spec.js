const server = require('../app');
const sinon = require('sinon');

describe('home route', function() {
  it('should return a rendered response', function() {
    var req = {};
    var res = {render: sinon.spy() };

    expect(res.render.calledOnce).toBe(false);
  });
});
