import Ember from 'ember';

export default Ember.Controller.extend({
  myItems: Ember.computed('model.@each.user','model.@each.start','model.@each.end', function() {
    let model = this.get('model');
    let session = this.get('session');
    return model.filterBy('user.email', session.content.secure.email);
  }),
  myItemsCount: Ember.computed('myItems', function() {
    return this.get('myItems').get('length');
  }),
  myTodayItems: Ember.computed('myItems', function() {
    let model = this.get('myItems');
    var today = new Date();
    today.setTime(today.getTime()-today.getHours()*3600*1000-today.getMinutes()*60*1000);
    return model.filter((item) => { return (item.get('start') > today || item.get('end') > today); });
  }),
  myTodayItemsCount: Ember.computed('myItems', function() {
    return this.get('myTodayItems').get('length');
  })
});
