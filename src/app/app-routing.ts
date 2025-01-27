import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './home/home';
import './all-products/all-products';
import './product-details/product-details';
import './shopping-cart/shopping-cart';

export const routes: Route[] = [
  { path: 'shopping-cart', component: 'app-shopping-cart', name: 'Shopping Cart' },
  { path: 'product-details', component: 'app-product-details', name: 'Product Details' },
  { path: 'all-products', component: 'app-all-products', name: 'All Products' },
  { path: 'home', component: 'app-home', name: 'Home' },
  { path: '', component: 'app-home', name: 'Home' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
