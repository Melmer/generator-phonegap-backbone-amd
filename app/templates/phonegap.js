'use strict';

define([
    'app',
    'fastclick'
], function (App, fastClick) {

    var phonegap = {

        initialize: function() {
            this.bindEvents();
        },

        bindEvents: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },

        onDeviceReady: function() {

            /* global document */
            if(window.device){
                if (parseFloat(window.device.version) > 7) {
                    document.getElementsByTagName('body')[0].className = 'ios7';
                }
            } else {
                document.getElementsByTagName('body')[0].className = '';
            }


            //FastClick: destroy the 300ms a link click delay
            FastClick.attach(document.body);

            //Load the App
            App.initialise();

            phonegap.receivedEvent('deviceready');

        },

        receivedEvent: function(id) {
            console.log('Received Event: ' + id);
        }
    };
    return phonegap;


});