import Ember from "ember";

export default Ember.Controller.extend({
    manufactoringDate: "",
    expiryDate:"",
    actions: {
        saveMaufactoringDate: function(date){
            this.set("manufactoringDate",date);
        },
        saveExpiryDate: function(date){
            this.set("expiryDate",date);
        }
    }
});
