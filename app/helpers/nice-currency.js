import Ember from 'ember';

export function niceCurrency(params/*, hash*/) {
  return `$ ${parseFloat(params, 10).toFixed(2)}`;
}

export default Ember.HTMLBars.makeBoundHelper(niceCurrency);
