import { Application } from '../declarations';
import users from './users/users.service';
import orders from './marketplace/orders/orders.service';
import shoppers from './marketplace/shoppers/shoppers.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(shoppers);
  app.configure(orders);
}