requirejs.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        backboneLocalStorage: '../bower_components/backbone.localStorage/backbone.localStorage',
        marionette: '../bower_components/marionette/marionette',
        text: '../bower_components/text'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_',
            deps: ['jquery']
        },
        backbone: {
            exports: 'Backbone',
            deps: ['underscore']
        },
        backboneLocalStorage: {
            exports: 'LocalStorage',
            deps: ['backbone']
        },
        marionette: {
            exports: 'Marionette',
            deps: ['backbone']
        }
    }
});

require([
    'app',
    'backbone'
], function (app, Backbone) {
    'use strict';

    app.start();

    Backbone.history.start();
});
