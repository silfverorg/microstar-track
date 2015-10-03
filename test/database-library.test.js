import should from 'should';
import DatabaseLibrary from '../src/database-module/database-library.js';
import config from './config.js';

const databaseLibrary = new DatabaseLibrary(config);

describe('Database Library', () => {

    it('Can create an entry', (done) => {
        databaseLibrary.createEntry({
            event: 'My test event',
            data: {
                'key 1': 'value 1'
            },
        })
            .then((result) => {
                result.should.be.ok;
                result.should.be.an.object;
                done();
            })
            .catch(done);
    });

    it('Can get all', (done) => {
        databaseLibrary.getAll()
            .then((data) => {
                should(data).be.ok;
                data.should.be.an.array;
                data.length.should.be.above(0);
                data.forEach((val) => {
                    val.should.have.properties(['id', 'data', 'event']);
                })
                done();
            })
            .catch(done);
    });

});
