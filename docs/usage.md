# Usage


## Example

```
//Import main object. All modules are also exported {TrackModule, FetchModule} is therefore valid. But you'll need to init them both.
import MicrostarTrack from 'microstar-track';

//Setup with our config. This syntax will perhaps be cleaned up.
const microstarTrack = new MicrostarTrack(config);

//Track module is for adding data.
const trackModule = microstarTrack.trackModule;
trackModule.track('event', object);

//Fetch module is for fetching data.
const fetchModule = microstarTrack.fetchModule;

fetchModule.getAll()
.then((data) => {

});

```
