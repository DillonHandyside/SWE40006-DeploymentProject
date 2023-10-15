const { add, subtract } = require('../app.js');
const assert = require('chai').assert;

describe('Math Functions', () => {
  it('should add two numbers', () => {
    assert.equal(add(2, 3), 5);
  });

  it('should subtract two numbers', () => {
    assert.equal(subtract(5, 3), 2);
  });
});