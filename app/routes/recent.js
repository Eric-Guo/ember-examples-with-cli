import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post').then((posts) => {

      // this doesn't update when models are added or removed
      // return posts.sortBy('created').reverseObjects();

      // but this does
      return Ember.ArrayProxy.extend({
        arrangedContent: Ember.computed.sort('content', 'sortProperties'),
        sortProperties: ['created:desc']
      }).create({
        content: posts
      });
    });
  }
});
