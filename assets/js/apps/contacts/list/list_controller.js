define(["app"], function(ContactManager){

    ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){

        List.Controller = {
            listContacts: function(){
                require(["entities/contact"], function(){

                    var fetchingContacts = ContactManager.request("contact:entities");

                    $.when(fetchingContacts).done(function(contacts){
                        console.log(contacts);
                    });

                });
            }
        }

    });

    return ContactManager.ContactsApp.List.Controller;
});


