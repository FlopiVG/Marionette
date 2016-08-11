requirejs.config({
    baseUrl: "assets/js",
    paths: {
        backbone: "vendor/backbone",
        jquery: "vendor/jquery",
        "jquery-ui": "vendor/jquery-ui",
        json2: "vendor/json2",
        underscore: "vendor/underscore",
        marionette: "vendor/backbone.marionette"
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
        "jquery-ui": ["jquery"]
    }
});

require(["app"], function(ContactManager){
    ContactManager.start();
});
