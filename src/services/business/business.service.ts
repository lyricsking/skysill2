// Initializes the `business` service on path `/business`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Business } from './business.class';
import hooks from './business.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'business': Business & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    model: 'business',
    client: app.get('prisma'),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/business', new Business(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('business');

  service.hooks(hooks);
}
