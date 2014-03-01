define([
    'backbone',
    'marionette',
    'text!templates/headerTemplate.html'
], function (Backbone, Marionette, template) {
    'use strict';

    var headerView = Backbone.Marionette.ItemView.extend({
        template: template
    });

    return headerView;
});