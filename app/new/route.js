import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    var item;
    item = this.store.createRecord('item');
    this.store.findRecord('user', this.get('session').content.secure.user_id).then((u) =>  {
      item.set('user', u);
    });
    return item;
  },
  actions: {
      create: function() {
        this.controller.get('model').save().then(() => {
          this.transitionToRoute('items');
        });
      }
  }
});
