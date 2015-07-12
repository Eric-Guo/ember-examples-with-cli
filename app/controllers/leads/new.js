import Ember from 'ember';
import Lead from '../../models/lead';

export default Ember.Controller.extend({
  actions: {

    createLead: function() {

      var self = this;
      var fields = this.get('fields');

      if (Lead.valid(fields)) {
        var lead = this.store.createRecord('lead', fields);
        lead.save().then(function(lead) {
          self.transitionToRoute('lead', lead);
        });
      } else {
        this.set('showError', true);
      }
    }

  }
});
