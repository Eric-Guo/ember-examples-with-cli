import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'}, function() {
    this.route('new', { resetNamespace: true });
  });
  this.route('login');
});

export default Router;
