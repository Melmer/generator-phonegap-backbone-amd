'use strict';

var app = app || {
    views: {},
    models: {},
    collections: {},
    routers: {},
    utils: {},
    adapters: {}
};


define([
    'jquery',
    'underscore',
    'backbone',

    'router',

], function ($, _, Backbone,
             Router
    ) {

    var initialise = function () {


        _.templateSettings = {
            interpolate: /\{\{(.+?)\}\}/g,
            evaluate: /\{\%(.+?)\%\}/g
        };

        Backbone.View.prototype.showAlert = function (message, title) {
            if (navigator.notification) {
                navigator.notification.alert(message, null, title, 'OK');
            } else {
                alert(title ? (title + ': ' + message) : message);
            }
        };

        //init a new router
        app.router = new Router();
        app.router.startRouting();


    };

    return {
        initialise: initialise
    };

});

