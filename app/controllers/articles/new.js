import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    actions: {
        addArticle: function() {
          var article = this.store.createRecord('article', {
              url: this.get('url'),
              title: this.get('title')
          });
          this.store.find('user', 1).then(function(user) {
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
        }
    }
});
