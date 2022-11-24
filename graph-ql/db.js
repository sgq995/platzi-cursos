'use strict';

const { MongoClient } = require('mongodb');
const {
  DB_USER,
  DB_PASSWD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env;

const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

let connection = null;

async function connectDb() {
  if (connection) {
    return connection;
  }

  let client;
  try {
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true
    });
    connection = client.db(DB_NAME);
  } catch (error) {
    console.error(mongoUrl, error);
    process.exit(1);
  }

  return connection;
}

module.exports = connectDb;
