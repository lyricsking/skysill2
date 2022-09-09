import assert from 'assert';
import app from '../../src/app';

describe('\'businessUserRoles\' service', () => {
  it('registered the service', () => {
    const service = app.service('business-user-roles');

    assert.ok(service, 'Registered the service');
  });
});
