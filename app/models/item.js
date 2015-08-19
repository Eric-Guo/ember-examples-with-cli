import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  workitem: DS.attr('string'),
  user: DS.belongsTo('user', {async: true}),
  start: DS.attr('date'),
  end: DS.attr('date'),
  duration: Ember.computed('start', 'end', {
    get() {
      return this.get('end') - this.get('start');
    }
  }),
  ticketnumber: DS.attr('string'),
  category: DS.attr('string')
});
