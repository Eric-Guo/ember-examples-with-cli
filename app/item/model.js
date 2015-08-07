import DS from 'ember-data';
import momentFromNow from 'ember-moment/computeds/from-now';

export default DS.Model.extend({
  workitem: DS.attr('string'),
  start: DS.attr('date'),
  startSince: momentFromNow('start'),
  end: DS.attr('date'),
  endSince: momentFromNow('end'),
  ticketnumber: DS.attr('string'),
  category: DS.attr('string')
});
