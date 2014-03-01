/* global define */
define([
    'backbone',
    'marionette'
], function (Backbone, Marionette) {
    'use strict';

    var pikachuRouter = Backbone.Router.extend({
        initialize: function () {
            require(['views/headerView'], function (HeaderView) {
                pikachu.header.show(new HeaderView());
            });
            require(['views/contentView'], function (ContentView) {
                pikachu.main.show(new ContentView());
            });
            require(['views/footerView'], function (FooterView) {
                pikachu.footer.show(new FooterView());
            });
        }
    });
    return pikachuRouter;
});