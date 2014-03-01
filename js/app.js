/* global define */
var pikachu;
define([
    'marionette'
], function (Marionette) {
    'use strict';

    pikachu = new Marionette.Application();

    pikachu.addRegions({
        header: '#header',
        main: '#main',
        footer: '#footer'
    });

    require(['routers/index'], function (Routers) {
        new Routers();
    });

    return pikachu;
});
