const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = encodeURIComponent(config.dbName)

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    this._client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
    this._dbName = DB_NAME;
  }

  /**
   * @returns {Promise<Db>}
   */
  async connect() {
    if (!MongoLib.connection) {
      await this._client.connect();
      MongoLib.connection = this._client.db(this._dbName);
    }

    return MongoLib.connection;
  }

  getAll(collection, query) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .find(query)
          .toArray();
      });
  }

  get(collection, id) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .findOne({ _id: ObjectId(id) });
      });
  }

  create(collection, data) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .insertOne(data);
      })
      .then(result => result.insertedId);
  }

  update(collection, id, data) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .updateOne(
            { _id: ObjectId(id) },
            { $set: data },
            { upsert: true }
          );
      })
      .then(result => (result.upsertedId || id));
  }

  delete(collection, id) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .deleteOne({ _id: ObjectId(id) });
      })
      .then(() => id);
  }
}

module.exports = MongoLib;
