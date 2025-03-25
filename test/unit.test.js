const assert = require('chai').assert;
const greet = require('./html/script');  // Import the function

describe('Unit Tests', () => {
  it('should return the correct greeting message', () => {
    const message = greet();
    assert.equal(message, 'Hello from Docker!');
  });
});
