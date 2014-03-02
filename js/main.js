requirejs.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        jquerymmenu: '../bower_components/jquery/jquery.mmenu',
        eiSlideShow: '../bower_components/jquery/jquery.eislideshow',
        easing: '../bower_components/jquery/easing',
        moveTop: '../bower_components/jquery/move-top',
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
        jquerymmenu: {
            deps: ['jquery']
        },
        eiSlideShow: {
            deps: ['jquery']
        },
        easing: {
            deps: ['eiSlideShow']
        },
        moveTop: {
            deps: ['jquery']
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

require(['jquery', 'jquerymmenu'], function($) {
    $('nav#menu-left').mmenu();
});

require(['jquery', 'easing'], function($) {
    $('#ei-slider').eislideshow({
					animation			: 'center',
					autoplay			: true,
					slideshow_interval	: 3000,
					titlesFactor		: 0
                });
});

require(['jquery', 'moveTop'], function($) {
    $(".scroll").click(function(event){		
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
			});
});

//require([
//    'app',
//    'backbone'
//], function (app, Backbone) {
//    'use strict';
//
//    app.start();
//
//    Backbone.history.start();
//});
