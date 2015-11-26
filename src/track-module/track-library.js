import R from 'ramda';
import Q from 'q';
import DatabaseModule from '../database-module/database-library';

class TrackLibrary {
    constructor(config) {
      this._config = config;
      this._database = new DatabaseModule(config);
    }

    /**
     * Track an event.
     *
     * @name track
     * @function
     * @author Viktor Silfverstrom <viktor@silfverstrom.com>
     * @version 0.1.0
     * @since 0.0.1
     * @access public
     * @param {String} event The event name
     * @param {Object} data The object the user sends with the event.
     * @param {Object = {}} $_vars All the variable objects.
     * @return {Object} 
     */
    track(event, data, $_vars = {}) {
        return Q.Promise((resolve, reject) => {
            if (!event) {
                resolve({
                    status: 400,
                })
            } else {
                const $_event_date = +(new Date());
                const obj = Object.assign($_vars, {
                    event,
                    data,
                    $_event_date
                });
                
                this._database.createEntry(obj)
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
