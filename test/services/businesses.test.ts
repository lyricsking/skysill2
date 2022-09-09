import assert from 'assert';
import app from '../../src/app';

describe('\'businesses\' service', () => {
  it('registered the service', () => {
    const service = app.service('marketplace');

    assert.ok(service, 'Registered the service');
  });
});
