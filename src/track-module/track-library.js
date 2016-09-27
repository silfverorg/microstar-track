const R = require('ramda');
const Q = require('q');
const DatabaseModule = require('../database-module/database-library');

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
     * @param {String} event_name The event name
     * @param {Object} event_data The object the user sends with the event.
     * @param {Object = {}} $_vars All the variable objects.
     * @return {Object} 
     */
    track(event_name, event_data, $_vars = {}) {
        return Q.Promise((resolve, reject) => {
            if (!event_name) {
                resolve({
                    status: 400,
                })
            } else {
                const $_event_date = +(new Date());
                const obj = Object.assign($_vars, {
                    event_name,
                    event_data,
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

module.exports = TrackLibrary;
