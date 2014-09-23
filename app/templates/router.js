/**
 * Created by melleheeres on 30/07/14.
 */
'use strict';

define([
    'jquery',
    'underscore',
    'backbone'


], function ($, _, Backbone
    ) {

    var AppRouter = Backbone.Router.extend({

        initialize: function () {

            this.routesHit = 0;

            //keep count of number of routes handled by your application
            Backbone.history.on('route', function (route, params) {
                this.routesHit++;

            }, this);

        },

        routes: {

            // default route no action found
            '*actions': 'noRouteFound'

        },

        startRouting: function () {
            Backbone.history.start();
        },

        back: function () {

            if (this.routesHit > 1) {

                //more than one route hit -> user did not land to current page directly
                window.history.back();

            } else {

                //otherwise go to the home page. Use replaceState if available so
                //the navigation doesn't create an extra history entry
            }
        },

        noRouteFound: function (route) {

            console.warn('No route found: ', route);

        }


    });

    return AppRouter;

});