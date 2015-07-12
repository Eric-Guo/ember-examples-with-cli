import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('leads', { path: '/' }, function() {
    this.route('new');
    this.resource('lead', { path: '/leads/:id' }, function() {
      this.route('edit');
    });
  });
});

export default Router;
