import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  title: DS.attr('string'),
  votes: DS.attr('number'),
  user: DS.belongsTo('user', {async: true})
});
