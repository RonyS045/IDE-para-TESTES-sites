
const preference = new Preference(client);

preference.create({
  body: {
    items: [
      {
        title: 'My product',
        quantity: 1,
        unit_price: 2000  // item unit price
      }
    ],
    // Allow only logged payments. To allow guest payments you can delete omit this property
    purpose: 'wallet_purchase'
  }
})
.then(console.log)
.catch(console.log);
