import Ember from "ember";

export default Ember.Controller.extend({
  needs: "posts",
	isEditing: false,

  actions: {
  	edit: function() {
  		this.set('isEditing', true);
  	},

  	doneEditing: function() {
  		this.set('isEditing', false);
      var self = this;
      this.get('model').save().then(function() {
        self.transitionToRoute('post');
      });
  	}
  },

  authors: function () {
    // we can access authors on the posts controller thanks to the needs declaration above
    return this.get('controllers.posts.authors');
  }.property("controllers.posts.authors.@each.name")
});
