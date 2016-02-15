import DatabaseLibrary from '../database-module/database-library';

class FetchLibrary {
    constructor(config) {
        this._config = config;
        this._database = new DatabaseLibrary(config);
    }

    getAll(payload) {
        return this._database.getAll(payload);
    }
}

export default FetchLibrary;
