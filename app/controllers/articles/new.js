import Ember from 'ember';
import Firebase from 'firebase';
import config from '../../config/environment';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    actions: {
        addArticle: function() {
            var ref = new Firebase(config.firebase);
            var authData = ref.getAuth();

            if (authData) {
                var article = this.store.createRecord('article', {
                    url: this.get('url'),
                    title: this.get('title')
                });
                this.store.find('user', authData.uid).then(function(user) {
                    article.set('user', user);
                    article.save().then(function() {
                        user.get('articles').addObject(article);
                        user.save();
                    });
                });
                this.setProperties({
                    url: '',
                    title: ''
                });
                this.transitionToRoute('articles');
            } else {
                console.log('You must log in to post an article');
            }
        }
    }
});
