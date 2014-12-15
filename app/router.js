

import IndexView from './views/index';

class Router extends Backbone.Router {

    constructor() {

        this.routes = {
            '': 'index',
        };

        super();
    }

    index() {

        let view = new IndexView();
        $('#app').html(view.render().$el);

    }

}

export default Router;
