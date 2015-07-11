import Ember from 'ember';
import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
   title: attr('string'),
   url: attr('string'),
   description: attr('string'),
   created: attr('date', {
      defaultValue() { return new Date(); }
   }),

   // points
   sunk: attr('boolean'),
   points: attr('number', {
      defaultValue() { return 0; }
   }),

   // type
   isDiscussion: Ember.computed.empty('url')
});
