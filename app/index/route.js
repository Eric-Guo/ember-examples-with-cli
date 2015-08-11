import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
      return this.store.findAll('item');
  },
  actions: {
    remove: function(item) {
      var self = this;
      item.destroyRecord().then(function() {
        self.refresh();
      });
    }
  }
});
