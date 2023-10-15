const assert = require('assert');
const { getGreetingMessage, server } = require('../app');

describe('getGreetingMessage function', () => {
  it('should return a greeting message with the provided name', () => {
    const name = 'John';
    const message = getGreetingMessage(name);
    assert.strictEqual(message, 'Hello, John!');
  });

  it('should return a default greeting message for an empty name', () => {
    const name = '';
    const message = getGreetingMessage(name);
    assert.strictEqual(message, 'Hello, !'); // Update this with your expected default message
  });

  after(() => {
    server.close();
  });
});