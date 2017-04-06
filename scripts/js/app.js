'use strict';

requirejs.config({
    baseUrl: 'scripts/lib',

    paths: {
        jquery: 'jquery-3.2.0.min',
        react: 'react',
        reactDOM: 'react-dom',
        app: '../js/components'
    },

    shim: {
        'jquery': {
            exports: '$'
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

require(['react-dom', 'app/application'], function (ReactDOM, App) {

    ReactDOM.render(App, document.getElementById('wrapper'));
});