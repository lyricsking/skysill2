import assert from 'assert';
import app from '../../src/app';

describe('\'deliveries\' service', () => {
  it('registered the service', () => {
    const service = app.service('deliveries');

    assert.ok(service, 'Registered the service');
  });
});
