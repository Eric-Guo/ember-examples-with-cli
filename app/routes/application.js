import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service(),
    beforeModel: function() {
      var _this = this;
      this.store.find('user', 1).then(function(user) {
          _this.get('session').set('user', user);
      });
    }
});
