// import { addToCart, totalPrice as price, tq} from './shoppingCart.js';
// addToCart('apple', 4);
// console.log(price, tq);

// console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('apple', 4);
// console.log(ShoppingCart.totalPrice);

// import add, { cart } from './shoppingCart.js';
// add('apple', 5);
// add('bread', 5);
// add('apples', 5);

// console.log(cart);

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);

//   return {title: data.at(-1).title, body: data.at(-1).body};
// }

// const lastPost = getLastPost();
// console.log(lastPost);

// lastPost.then(data => console.log(data));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// const ShoppingCart2 = (function() {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function(product, quantity) {
//     console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
//     cart.push({ product, quantity });
//   };

//   const orderStock = function(product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity
//   }
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('bread', 5);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

// export.addToCart = function(product, quantity) {
//   console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
//   cart.push({ product, quantity });
// };

// const { addToCart } = require('./shoppingCart.js');

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
