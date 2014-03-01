define([
    'backbone',
    'marionette',
    'text!templates/headerTemplate.html'
], function (Backbone, Marionette, template) {
    'use strict';

    var headerView = Backbone.Marionette.ItemView.extend({
        className: 'header-top',
        template: template
    });

    return headerView;
});