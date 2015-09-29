import R from 'ramda';
import Q from 'q';
import databaseModule from 'database-module';


class TrackLibrary {
    track(event, data) {
        return Q.Promise((resolve, reject) => {
            resolve({
                status: 200,
            });
        });
    }
}

export default new TrackLibrary();
