// BEGIN-SNIPPET cp-composable-cpm-example
import Ember from 'ember';

import sum from 'ember-cpm/macros/sum';
import sumBy from 'ember-cpm/macros/sum-by';
import product from 'ember-cpm/macros/product';

export default Ember.Controller.extend({
  order: [],
  queryParams: ['order'],

  taxPercent: 6,   // in percent (i.e., 6 ==> 6%)
  tipPercent: 17,  // in percent
  discount: 5, // dollars

  subtotal: sumBy('order', 'price'),

  tipAmount: product(product('tipPercent', 0.01), 'subtotal'),
  taxAmount: product(product('taxPercent', 0.01), 'subtotal'),

  totalAmount: sum(
    'subtotal',
    'tipAmount',
    'taxAmount',
    product('discount', -1)
  ),

  actions: {
    addMenuItem(menuItem) {
      let order = this.get('order');
      order.addObject({
        id: (new Date()).valueOf(),
        name: menuItem.get('name'),
        price: menuItem.get('price')
      });
    },
    removeOrderItem(orderItem) {
      this.get('order').removeObject(orderItem);
    }
  }
});
// END-SNIPPET
