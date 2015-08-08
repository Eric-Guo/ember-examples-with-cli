import DS from 'ember-data';

export default DS.Model.extend({
    badge: DS.attr('string'),
    email: DS.attr('string'),
    items: DS.hasMany('item', {async: true})
});
