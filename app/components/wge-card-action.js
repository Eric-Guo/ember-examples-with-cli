import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    this.nearestWithProperty('_wgeCard')
      .registerWgeAction(this);
  },

  willDestroyElement() {
    this.nearestWithProperty('_wgeCard')
      .unregisterWgeAction(this);
  },

  render() {} // Don't render
});
