import Ember from "ember";

export default Ember.ArrayController.extend({
    sortProperties: ['model.name'],
    sortAscending: true,
    itemController: 'product'
});
