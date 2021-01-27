'use strict';

const { MongoClient } = require('mongo');
const {
  DB_USER,
  DB_PASSWD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env;

const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

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
}

module.exports = connectDb;
