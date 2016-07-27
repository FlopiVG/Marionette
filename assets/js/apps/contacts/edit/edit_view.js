ContactManager.module("ContactsApp.Edit", function(Edit, ContactManager, Backbone, Marionette, $, _){

    Edit.Contact = ContactManager.Common.Views.Form.extend({
        template: "#contact-form",

        initialize: function(){
            this.title = "Edit" + this.model.get("firstName");
            this.title += " " + this.model.get("lastName");
        },

        onRender: function(){
            if(this.options.generateTitle){
                var $title = $("<h1>", {text: this.title});
                this.$el.prepend($title);
            }

            this.$(".js-submit").text("Update contact");
        }
    });

});
