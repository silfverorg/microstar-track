import R from 'ramda';
import Q from 'q';
import DatabaseModule from '../database-module/database-library';

const config = {
    host: 'localhost',
    port: 32775,
};

class TrackLibrary {
    constructor(config) {
      this.config = config;
      this.database = new DatabaseModule(config);
    }

    track(event, data) {
        return Q.Promise((resolve, reject) => {
            if (!event) {
                resolve({
                    status: 400,
                })
            } else {
                this.database.createEntry({
                    event,
                    data
                })
                    .then((res) => {
                            resolve({
                                status: 200,
                            });
                    })
                    .catch((err) => {
                        resolve({
                            status: 500,
                            error: err,
                        });
                    })
            }
        });
    }
}

export default TrackLibrary;
