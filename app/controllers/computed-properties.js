import Ember from 'ember';
import injectObject from '../utils/inject-object';

const {
  computed
} = Ember;

export default Ember.Controller.extend({
  router: injectObject('router:main'),
  choices: [{
    id: 'basic',
    url: '/computed-properties',
    route: 'computed-properties.index'
  }, {
    id: 'cpm',
    url: '/computed-properties/cpm',
    route: 'computed-properties.cpm'
  }, {
    id: 'composable-cpm',
    url: '/computed-properties/composable-cpm',
    route: 'computed-properties.composable-cpm'
  }],

  _selectedTabId: 'base',
  selectedTabId: computed('_selectedTabId', {
    get() {
      return this.get('_selectedTabId');
    },
    set(key, newVal) {
      this.transitionTo(this.get('choices').findBy('id', newVal).route);
      return newVal;
    }
  })
});
