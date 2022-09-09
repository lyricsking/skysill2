// Initializes the `businessUserRoles` service on path `/business-user-roles`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { BusinessUserRoles } from './business-user-roles.class';
import hooks from './business-user-roles.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'business-user-roles': BusinessUserRoles & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    model: 'businessUserRoles',
    client: app.get('prisma'),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/business-user-roles', new BusinessUserRoles(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('business-user-roles');

  service.hooks(hooks);
}
