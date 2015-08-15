import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  sessionEmail: null, // passed-in
  workitem: null, // passed-in
  email: null, // passed-in
  startSince: null,   // passed-in,
  endSince: null,   // passed-in,
  durationMoment: null,   // passed-in,
  ticketnumber: null,   // passed-in,
  category: null,   // passed-in,
  canRemove: Ember.computed('email', 'sessionEmail', {
    get() {
      return (this.get('email') === this.get('sessionEmail'));
    }
  })
});
