'use strict';

import { startServer } from './lib/server';


import { createSoundMockPromise } from './__test__/lib/sound-mock';

startServer()
  .then(async() => {
    console.log(await createSoundMockPromise(), 'sound');
  });

