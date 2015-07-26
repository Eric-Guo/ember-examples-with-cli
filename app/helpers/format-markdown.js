import Ember from "ember";

var converter = new showdown.Converter();

export default Ember.Helper.helper(function(params) {
  return new Ember.Handlebars.SafeString(converter.makeHtml(params[0]));
});
