import Q from 'q';
import r from 'rethinkdb';

const defaultHandlerForRunCallback = (defer) => {
    return (err, result) => {
        if (err) return defer.reject(err);
        defer.resolve(result);
    };
};

class databaseLibrary {
    constructor(config) {
        this.connection = null;
        this.config = config;
    }

    _getConnection() {
        return Q.Promise((resolve, reject) => {
            if (this.connection) return resolve(this.connection);

            r.connect(this.config, (err, conn) => {
                if (err) return reject(err);
                this.connection = conn;
                resolve(this.connection);
            });
        });
    }

    createEntry(payload) {
        const defer = Q.defer();

        this._getConnection()
            .then((conn) => {
                r.db('microstar').table('events')
                    .insert([
                        payload
                    ])
                    .run(conn, defaultHandlerForRunCallback(defer));
            });

        return defer.promise;
    }

    getAll(payload={}) {
      const defer = Q.defer();
      this._getConnection()
        .then((conn) => {
            let query = r.db('microstar').table('events')
            if (payload.limit) {
              query = query.limit(payload.limit);
            }

           query.run(conn, (err, cursor) => {
              if (err) return defer.reject(err);
              cursor.toArray(defaultHandlerForRunCallback(defer));
            });
        });
      return defer.promise;
    }
}

export default databaseLibrary;
