process.env.PORT = 3001;
const assert = require('assert');
const { getGreetingMessage } = require('../app');

describe('getGreetingMessage function', () => {
  it('should return a greeting message with the provided name', () => {
    const name = 'SWE40006';
    const message = getGreetingMessage(name);
    assert.strictEqual(message, 'Hello, John!');
  });

  it('should return a default greeting message for an empty name', () => {
    const name = '';
    const message = getGreetingMessage(name);
    assert.strictEqual(message, 'Hello, !'); // Update this with your expected default message
  });
});
