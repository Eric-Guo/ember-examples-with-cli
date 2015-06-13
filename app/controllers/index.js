import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    alert: function(){
      //do some controller level processing
      return true;
    }
  }
});
