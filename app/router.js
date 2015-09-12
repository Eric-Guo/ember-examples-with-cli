import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('computed-properties', function() {
    this.route('cpm');
    this.route('composable-cpm');
  });
  this.route('components', function() {});
  this.route('design-patterns', function() {});
  this.route('testing', function() {
    this.route('pageobject');
    this.route('test');
  });
  this.route('component');
});

export default Router;
