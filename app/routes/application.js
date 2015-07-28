import Ember from 'ember';
import Firebase from 'firebase';
import config from '../config/environment';

export default Ember.Route.extend({
    session: Ember.inject.service(),
    beforeModel: function() {
        var _this = this;
        var ref = new Firebase(config.firebase);
        var authData = ref.getAuth();
        if (authData) {
            this.store.find('user', authData.uid).then(function(user) {
                _this.get('session').set('user', user);
            });
        }
    }
});
