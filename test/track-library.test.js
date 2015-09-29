import microstarTrack from '../index.js';
import should from 'should';

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

});
