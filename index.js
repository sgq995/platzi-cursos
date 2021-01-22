'use strict';

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    greet: String
  }
`);

const resolvers = {
  hello: () => {
    return 'Hello World!';
  },

  greet: () => {
    return 'Hi!';
  }
}

graphql(schema, '{ hello, greet }', resolvers)
  .then(data => console.log(data));
