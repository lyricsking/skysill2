import { Application } from '../declarations';
import users from './users/users.service';
import orders from './marketplace/orders/orders.service';
import shoppers from './shoppers/shoppers.service';
import wallet from './wallet/wallet.service';
import business from './business/business.service';
import wallets from './wallets/wallets.service';
import shops from './shops/shops.service';
import businessUserRoles from './business-user-roles/business-user-roles.service';
import products from './products/products.service';
import deliveries from './deliveries/deliveries.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(shoppers);
  app.configure(orders);
  app.configure(wallet);
  app.configure(business);
  app.configure(wallets);
  app.configure(shops);
  app.configure(businessUserRoles);
  app.configure(products);
  app.configure(deliveries);
}