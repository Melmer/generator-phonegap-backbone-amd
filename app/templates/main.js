'use strict';

require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        text : '../bower_components/requirejs-text/text',
        backbone: '../bower_components/backbone/backbone',
        backboneSubroute: '../bower_components/backbone.subroute/backbone.subroute',
        underscore: '../bower_components/underscore/underscore',
        fastclick: '../bower_components/fastclick/lib/fastclick'

    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }

    },

});


require([
    'phonegap'
], function (phonegap) {

    //if this is a cordova app > initialize (wait for the device)
    if(typeof cordova !== 'undefined'){
        phonegap.initialize();
    } else {
        phonegap.onDeviceReady();
    }

});