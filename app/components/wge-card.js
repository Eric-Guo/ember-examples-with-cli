import Ember from 'ember';

const { computed: { alias } } = Ember;

export default Ember.Component.extend({
  classNames: ['card'],
  _wgeCard: true,
  _cardActions: [],

  // Needed to ensure context of
  // child component templates
  // is the controller
  parentController: alias('targetObject'),

  registerWgeAction(component) {
    this.get('_cardActions')
      .addObject(component);
  },

  unregisterWgeAction(component) {
    this.get('_cardActions')
      .removeObject(component);
  }
});
