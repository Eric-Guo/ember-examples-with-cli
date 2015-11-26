import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var companies = [{
      "name" : "Google",
      "headquaters": "Mountain View, California, United States of America",
      "revenue":"59825000000"
      },{
        "name" : "Facebook",
        "headquaters":"Menlo Park, California,United States of America",
        "revenue":"7870000000"
      },{
        "name" : "twitter",
        "revenue": "664000000",
        "headquaters":"San Francisco, California, United States of America"
      }];
    return companies;
  }
});