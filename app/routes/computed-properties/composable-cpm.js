import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'computed-properties/index',

  model() {
    return this.store.find('menu-item');
  },

  setupController(controller) {
    this._super(...arguments);
    this.controllerFor('computed-properties').set('_selectedTabId', 'composable-cpm');
    controller.set('codeExample', 'cp-composable-cpm-example.js');
  }
});
