import Ember from "ember";

var converter = new showdown.Converter();

export default Ember.Handlebars.makeBoundHelper(function(value) {
  return new Ember.Handlebars.SafeString(converter.makeHtml(value));
});
