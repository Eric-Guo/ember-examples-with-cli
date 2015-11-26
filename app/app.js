import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import user from './user';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

var myUser = user.create({
  firstName: "suchit",
  lastName: "puri"
});

console.log(myUser.get('fullName')); //suchit puri

user.set("firstName","Tony");
user.set("lastName","Stark");
console.log(user.get('fullName'));//Tony Stark


export default App;
