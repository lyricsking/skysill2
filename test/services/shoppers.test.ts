import assert from 'assert';
import app from '../../src/app';

describe('\'shoppers\' service', () => {
  it('registered the service', () => {
    const service = app.service('marketplace/shoppers');

    assert.ok(service, 'Registered the service');
  });
});
