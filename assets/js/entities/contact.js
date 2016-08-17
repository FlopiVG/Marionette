define(["app", "apps/config/storage/localstorage"], function(ContactManager){

    ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Maronette, $, _){

        Entities.Contact = Backbone.Model.extend({
            urlRoot: "contacts",
            defaults: {
                firstName: "",
                lastName: "",
                phoneNumber: ""
            },
            validate: function(attrs, options){
                var errors = {};
                if(! attrs.firstName){
                    errors.firstName = "can't be blank";
                }
                if(! attrs.lastName){
                    errors.lastName = "can't be blank";
                }else{
                    if(attrs.lastName.length < 2){
                        errors.lastName = "is too short";
                    }
                }
                if(! _.isEmpty(errors)){
                    return errors;
                }
            }
        });

        Entities.configureStorage(Entities.Contact);

        Entities.ContactCollection = Backbone.Collection.extend({
            url: "contacts",
            model: Entities.Contact,
            comparator: "firstName"
        });
        Entities.configureStorage(Entities.ContactCollection);

        var API = {
            getContactEntities: function(){
                var contacts = new Entities.ContactCollection();
                var defer = $.Deferred();
                contacts.fetch({
                    success: function(data){
                        defer.resolve(data);
                    }
                });
                var promise = defer.promise();

                return promise;
            },

            getContactEntity: function(contactId){
                var contact = new Entities.Contact({id: contactId});
                var defer = $.Deferred();
                setTimeout(function(){
                    contact.fetch({
                        success: function(data){
                            defer.resolve(data);
                        },
                        error: function(data){
                            defer.resolve(undefined);
                        }
                    });
                }, 2000);
                return defer.promise();
            }
        };

        ContactManager.reqres.setHandler("contact:entities", function(){
            return API.getContactEntities();
        });

        ContactManager.reqres.setHandler("contact:entity", function(id){
            return API.getContactEntity(id);
        });

    });

    return ;

});
