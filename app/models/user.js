import DS from 'ember-data';

export default DS.Model.extend({
    email: DS.attr('string'),
    articles: DS.hasMany('article', {async: true})
});
