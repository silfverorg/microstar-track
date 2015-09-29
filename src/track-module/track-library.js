import R from 'ramda';
import Q from 'q';
import DatabaseModule from '../database-module/database-library';

const config = {
    host: 'localhost',
    port: 32775,
};

const databaseModule = new DatabaseModule(config);

class TrackLibrary {
    track(event, data) {
        return Q.Promise((resolve, reject) => {
            if (!event) {
                resolve({
                    status: 400,
                })
            } else {
                databaseModule.createEntry({
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

export default new TrackLibrary();
