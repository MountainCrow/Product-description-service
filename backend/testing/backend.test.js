const request = require('supertest');
const app = require('../database/server.js');

test('Database data retrieval', () => {
  return app.getProducts().then(data => {
    expect(data.image).toEqual('https://hrphxfec.s3-us-west-1.amazonaws.com/Kanken+Laptop+13/kanken_acorn.jpg');
  });
});

