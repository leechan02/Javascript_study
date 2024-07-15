// import { addToCart, totalPrice as price, tq} from './shoppingCart.js';
// addToCart('apple', 4);
// console.log(price, tq);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('apple', 4);
// console.log(ShoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js';
add('apple', 5);
add('bread', 5);
add('apples', 5);

console.log(cart);