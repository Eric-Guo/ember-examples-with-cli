import Ember from 'ember';

export default Ember.Controller.extend({
  value: 'ok',
  actions: {
    accept() {
      alert('accepted');
    },
    cancel() {
      alert('cancelled');
    }
  }
});
