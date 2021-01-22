'use strict';

const { graphql, buildSchema } = require('graphql');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const port = process.env.PORT ?? 3000;

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

app.use('/api', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
