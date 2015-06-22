import Ember from "ember";

export default Ember.Controller.extend({
    formattedPrice: function(){
        return this.get('model.symbol') + "   " + Ember.$.number(this.get('model.price'),2);
    }.property('model.symbol','model.price'),

    formattedDimension: function(){
        return this.get('model.dimensions.width') + " x "  + this.get('model.dimensions.height') + " x " + this.get('model.dimensions.length');
    }.property('model.dimensions.width','model.dimensions.height','model.dimensions.length'),

    shortDescription: function(){
        var shortDesc = this.get('model.description').substring(0, 25);
        return shortDesc + "...";
    }.property('model.description')
});
