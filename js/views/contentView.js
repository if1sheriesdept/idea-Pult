define([
    'backbone',
    'marionette',
    'text!templates/contentTemplate.html'
], function (Backbone, Marionette, template) {
    'use strict';
    var contentView = Backbone.Marionette.ItemView.extend({
        initialize: function() {
        },
        template: template
    });
    return contentView;
});