import Ember from 'ember';

export default Ember.Controller.extend({
  edit: true,
  actions:{
    changeEdit: function(){
      this.toggleProperty('edit');
    }
  }
});
