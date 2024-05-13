'use strict'

const stripe = Stripe('pk_test_51NostTKyaA7GbyZM1FeAgdsecqbHAvtxILRTzrlpmnd65YYLF1Pwo4UFt9dszgpL1rYT44jq3eFovC0D9M9Jq7lE00Ug0iH4fu');
const elements = stripe.elements({
  mode: 'payment',
  currency: 'usd',
  amount: 1099,
});

const addressOptions = { mode: 'billing' };
const linkAuthElement = elements.create('linkAuthentication');
const addressElement = elements.create('address', addressOptions);
const paymentElement = elements.create('payment');

linkAuthElement.mount('#link-auth-element');
addressElement.mount('#address-element');
paymentElement.mount('#payment-element');

// selectors
const paymentForm = document.querySelector('#payment-form')

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault()
  elements.submit().then(res => {
    // returns empty object if everyting is fine
    console.log('res', res.error);
  })
})