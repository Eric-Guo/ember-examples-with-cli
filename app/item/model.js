import DS from 'ember-data';

export default DS.Model.extend({
  workitem: DS.attr('string'),
  start: DS.attr('date'),
  end: DS.attr('date'),
  ticketnumber: DS.attr('string'),
  category: DS.attr('string')
});
