import TrackModule from './track-module/track-library.js';
import FetchModule from './fetch-module/fetch-library.js';

export {FetchModule, TrackModule};

class Microstar {
    constructor(config) {
        this._config = config;
    }

    trackModule() {
        return new TrackModule(this._config);
    }

    fetchModule() {
        return new FetchModule(this._config);
    }
}

export default Microstar;
