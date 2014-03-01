define([
    'backbone',
    'marionette',
    'text!templates/footerTemplate.html'
], function (Backbone, Marionette, template) {
    'use strict';
    var footerView = Backbone.Marionette.ItemView.extend({
        template: template
    });
    return footerView;
});