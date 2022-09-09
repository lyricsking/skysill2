// Initializes the `wallets` service on path `/wallets`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Wallets } from './wallets.class';
import hooks from './wallets.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'wallets': Wallets & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    model: 'wallets',
    client: app.get('prisma'),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/wallets', new Wallets(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('wallets');

  service.hooks(hooks);
}
