import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.find('menu-item');
  },

  setupController(controller) {
    this._super(...arguments);
    this.controllerFor('computed-properties').set('_selectedTabId', 'basic');
    controller.set('codeExample', 'cp-basic-example.js');
  }
});
