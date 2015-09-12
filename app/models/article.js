import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  description: DS.attr('string'),
  notes: DS.attr('string'),
  state: DS.attr('string', {
    defaultValue: 'borrowed'
  }),
  friend: DS.belongsTo('friend')
});
