requirejs.config({
    baseUrl: "assets/js",
    paths: {
        backbone: "vendor/backbone",
        marionette: "vendor/backbone.marionette",
        localstorage: "vendor/backbone.localstorage",
        jquery: "vendor/jquery",
        "jquery-ui": "vendor/jquery-ui",
        json2: "vendor/json2",
        underscore: "vendor/underscore"
    },
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["jquery", "underscore", "json2"],
            exports: "Backbone"
        },
        marionette: {
            deps: ["backbone"],
            exports: "Marionette"
        },
        "jquery-ui": ["jquery"],
        localstorage: ["backbone"]
    }
});

require(["app"], function(ContactManager){
    ContactManager.start();
});
