
const stripe = require('stripe')("sk_test_2hPmvRZOtb9jtLhbazI9YiEr");


module.exports = (req) => {

  const token = req.body.stripeToken;

  return stripe.charges.create({
    // ensures we send a number, and not a string
    amount: 1000,
    currency: "usd",
    source: token,
    description: 'food', 
  });
}