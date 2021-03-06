const MongoClient = require('mongodb').MongoClient;

class databaseLibrary {
  constructor(config) {
    this.config = config;
  }

  createEntry(payload) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.config.dburl, (err, db) => {
        if (err) return reject(err);
        const collection = db.collection('events');
        collection.insert(payload, (err, res) => {
          db.close();
          if (err) return reject(err);
          resolve();
        });
      });
    });
  }

  getAll(payload={}) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.config.dburl, (err, db) => {
        if (err) return reject(err);
        const collection = db.collection('events');
        var q = collection.find({});
        if (payload.limit) {
          q = q.limit(payload.limit);
        }

        q.toArray((err, docs) => {
          db.close();
          if (err) return reject(err);
          resolve(docs);
        });
      });
    });
  }
}

module.exports = databaseLibrary;
