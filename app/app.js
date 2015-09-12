import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

// Change the class Ember adds to active elements
Ember.LinkComponent.reopen({
  activeClass: 'is-active'
});

loadInitializers(App, config.modulePrefix);

export default App;
