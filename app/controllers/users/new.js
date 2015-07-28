import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    actions: {
        createAccount: function() {
            var email = this.get('email');
            var store = this.get('store');

            var newUser = store.createRecord('user', { email: email });
            var thisSession = this.get('session');
            thisSession.set('user', newUser);
            this.transitionToRoute('articles');
        }
    }
});
