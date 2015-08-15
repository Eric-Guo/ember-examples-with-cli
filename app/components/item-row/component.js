import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  sessionEmail: null, // passed-in
  item: null, // passed-in
  itemEmail: null, // passed-in
  canRemove: Ember.computed('itemEmail', 'sessionEmail', {
    get() {
      return (this.get('itemEmail') === this.get('sessionEmail'));
    }
  }),
  actions: {
    remove: function(item) {
      item.destroyRecord();
    }
  }
});
