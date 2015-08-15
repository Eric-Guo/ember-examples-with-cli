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
  canEdit: Ember.computed('itemEmail', 'sessionEmail', {
    get() {
      return (this.get('itemEmail') === this.get('sessionEmail'));
    }
  }),
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function(item) {
      let self = this;
      item.set('start', new Date(item.get('start')));
      item.set('end', new Date(item.get('end')));
      item.save().then(function() {
        self.set('isEditing', false);
      });
    },
    remove: function(item) {
      item.destroyRecord();
    }
  }
});
