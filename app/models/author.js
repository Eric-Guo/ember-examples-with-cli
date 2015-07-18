import DS from "ember-data";

var Author = DS.Model.extend({
	name: DS.attr('string', {defaultValue: ""})
});

export default Author;
