// Initializes the `deliveries` service on path `/deliveries`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Deliveries } from './deliveries.class';
import hooks from './deliveries.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'deliveries': Deliveries & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    model: 'deliveries',
    client: app.get('prisma'),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/deliveries', new Deliveries(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('deliveries');

  service.hooks(hooks);
}
