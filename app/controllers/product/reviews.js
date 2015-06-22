import Ember from "ember";

export default Ember.Controller.extend({
    needs:["product"],
    product: Ember.computed.alias("controllers.product")
});
