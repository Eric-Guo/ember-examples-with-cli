import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isOpen: false,
  post: {},

  actions: {
    toggleOpen() {
      this.toggleProperty('isOpen');
    },
    save() {
      let postAttrs = this.get('post');
      let post = this.get('store').createRecord('post', postAttrs);

      this.set('isSaving', true);

      post.save().then(() => {
        this.setProperties({
          isSaving: false,
          isOpen: false
        });

        this.sendAction('postCreated');
      });
    }
  }
});
