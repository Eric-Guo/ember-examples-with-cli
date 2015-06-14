import Ember from "ember";

export default Ember.Controller.extend({
	isEditing: false,

  actions: {
  	edit: function() {
  		this.set('isEditing', true);
  	},

  	doneEditing: function() {
  		this.set('isEditing', false);
  		// this.store.commit();
  	}
  }
});
