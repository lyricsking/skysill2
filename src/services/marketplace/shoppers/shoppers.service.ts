// Initializes the `shoppers` service on path `/shoppers`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Shoppers } from './shoppers.class';
import hooks from './shoppers.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'shoppers': Shoppers & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    model: 'shoppers',
    client: app.get('prisma'),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/shoppers', new Shoppers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('shoppers');

  service.hooks(hooks);
}
