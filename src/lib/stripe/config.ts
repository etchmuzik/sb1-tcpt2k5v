import { loadStripe } from '@stripe/stripe-js';

const stripeKey = 'pk_live_51PBNYXCrY7rIA1flDUOH8DxABLpEy6vTnG9dUB3lAtw3vzjG47odElYzbtMCmUVw0HtfeC7IfqBAX8dvNhHyUN2900FO4KXimZ';

if (!stripeKey) {
  throw new Error('Missing Stripe publishable key');
}

export const stripePromise = loadStripe(stripeKey);