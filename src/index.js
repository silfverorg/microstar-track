const TrackModule = require('./track-module/track-library.js');
const FetchModule = require('./fetch-module/fetch-library.js');

class Microstar {
    constructor(config) {
        this.trackModule = new TrackModule(config);
        this.fetchModule = new FetchModule(config);
    }
}

exports.FetchModule = FetchModule;
exports.TrackModule = TrackModule;
module.exports = Microstar;
