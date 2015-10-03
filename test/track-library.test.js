import MicrostarTrack from '../src/index.js';
import should from 'should';
import config from './config.js';

const microstarTrack = new MicrostarTrack(config).trackModule;

describe('Track library Suite', () => {

  it('Can track a new entry', (done) => {
    microstarTrack.track('My event', {id: 1})
    .then((res) => {
        try {
            res.should.have.property('status', 200);
            done();
        } catch (err) {
            done(err);
        }
    });
  });

    it('Will send correct error status for invalid arguments', (done) => {
        microstarTrack.track(undefined)
            .then((res) => {
                try {
                    res.should.have.property('status', 400);
                    done();
                } catch (err) {
                    done(err);
                }
            })
    });

});
