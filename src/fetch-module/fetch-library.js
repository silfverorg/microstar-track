import DatabaseLibrary from '../database-module/database-library';

class FetchLibrary {
    constructor(config) {
        this._config = config;
        this._database = new DatabaseLibrary(config);
    }

    getAll() {
        return this._database.getAll();
    }
}

export default FetchLibrary;
