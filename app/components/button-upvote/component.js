import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  click() {
    let model = this.get('attrs.model');
    model.value.incrementProperty('points');
    model.value.save();
  }
});
