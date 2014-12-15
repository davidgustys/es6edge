//require('./deps'); //include all dependencies


import Router from './router';

//var Router = require('./router');

class Application {

    constructor(){

        this.router = new Router();
        Backbone.history.start();
    }

}


$(() => {
    var app = new Application();

    //app.router.navigate('baba', {trigger: true});

});
