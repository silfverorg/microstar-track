const should = require('should');
const FetchModule = require('../src/fetch-module/fetch-library.js');
const config  = require('./config.js');

const fetchModule = new FetchModule(config);

describe('Fetch library', () => {
  it('Can get all', function(done) {
    this.timeout(5000);
    fetchModule.getAll()
      .then((data) => {
        try {
          should(data).be.ok;
          data.should.be.an.array;
          data.length.should.be.above(0);
          data.forEach((val) => {
            val.should.have.properties(['_id', 'event_data', 'event_name']);
          });
          done();
        } catch (err) {
          done(err);
        }
      })
      .catch(done);
  });

  it('Can get all with limit', (done) => {
    fetchModule.getAll({limit: 20})
      .then((data) => {
        should(data).be.ok;
        data.should.be.an.array;
        data.length.should.be.belowOrEqual(20);
        data.forEach((val) => {
          val.should.have.properties(['_id', 'event_data', 'event_name']);
        });
        done();
      })
      .catch(done);
  });

});
