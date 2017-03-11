const stripe = require('stripe')("sk_test_2hPmvRZOtb9jtLhbazI9YiEr");
var cartTotal = require("./cart.js");

module.exports = (req) => {

  const token = req.body.stripeToken;

  return stripe.charges.create({
    // ensures we send a number, and not a string
    amount: cartTotal.cart(),
    currency: "usd",
    source: token,
    description: 'food',
  });
};
