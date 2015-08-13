import Ember from 'ember';
import DS from 'ember-data';
import momentFromNow from 'ember-moment/computeds/from-now';
import momentDuration from 'ember-moment/computeds/duration';

export default DS.Model.extend({
  workitem: DS.attr('string'),
  user: DS.belongsTo('user', {async: true}),
  canRemove: Ember.computed.equal('user.email', 'eric.guo@sandisk.com'),
  start: DS.attr('date'),
  startSince: momentFromNow('start'),
  end: DS.attr('date'),
  endSince: momentFromNow('end'),
  duration: Ember.computed('start', 'end', {
    get() {
      return this.get('end') - this.get('start');
    }
  }),
  durationMoment: momentDuration('duration', 'milliseconds'),
  ticketnumber: DS.attr('string'),
  category: DS.attr('string')
});
