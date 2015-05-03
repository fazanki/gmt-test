'use strict';

require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
    },
    shim: {
       

    }
});

require(['views/app', 'jquery'], function(AppView) {
    


});
