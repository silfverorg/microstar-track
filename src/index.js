import TrackModule from './track-module/track-library.js';
import FetchModule from './fetch-module/fetch-library.js';

export {FetchModule, TrackModule};

class Microstar {
    constructor(config) {
        this.trackModule = new TrackModule(config);
        this.fetchModule = new FetchModule(config);
    }
}

export default Microstar;
