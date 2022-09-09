import assert from 'assert';
import app from '../../src/app';

describe('\'orders\' service', () => {
  it('registered the service', () => {
    const service = app.service('marketplace/orders');

    assert.ok(service, 'Registered the service');
  });
});
