import Ember from 'ember';

const { computed } = Ember;

// BEGIN-SNIPPET cp-cpm-example
export default Ember.Controller.extend({
  order: [],
  queryParams: ['order'],

  taxPercent: 6,   // in percent (i.e., 6 ==> 6%)
  tipPercent: 17,  // in percent
  discount: 5, // dollars

  orderPrices: computed.mapBy('order', 'price'),
  subtotal: computed.sum('orderPrices'),

  tipAmount: computed('subtotal', 'tipPercent', {
    get() {
      return this.get('tipPercent') * 0.01 * this.get('subtotal');
    }
  }),

  taxAmount: computed('subtotal', 'taxPercent', {
    get() {
      return this.get('taxPercent') * 0.01 * this.get('subtotal');
    }
  }),

  totalAmount: computed('subtotal', 'taxAmount', 'tipAmount', 'discount', {
    get() {
      return this.get('subtotal') +
        this.get('taxAmount') +
        this.get('tipAmount') +
        (-1 * this.get('discount'));
    }
  }),

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
