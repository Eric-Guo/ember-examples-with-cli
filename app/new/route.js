import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return {
      workitem: '',
      start: new Date(new Date() - 60*60*1000),
      end: new Date(),
      ticketnumber: '',
      category: ''
    };
  },
  setupController: function (controller, model) {
    // Call _super for default behavior
    this._super(controller, model);
    // Implement your custom setup after
    this.controllerFor('index').set('showStatus', false);
  },
  resetController: function (controller, isExiting) {
    if (isExiting) {
      this.controllerFor('index').set('showStatus', true);
    }
  },
  actions: {
    create: function() {
      var self = this;
      var model = this.modelFor('new');
      var item = this.store.createRecord('item', {
        workitem: model.workitem,
        start: model.start,
        end: model.end,
        ticketnumber: model.ticketnumber,
        category: model.category
      });
      this.store.findRecord('user', this.get('session').content.secure.user_id).then((u) =>  {
        item.set('user', u);
        item.save();
        self.transitionTo('index');
      });
    }
  }
});
