var fs = require('fs');



class IndexView extends Backbone.View {


    constructor(vars = {}) {

        this.vars = vars;
        super();

    }


    initialize() {
        this.template = fs.readFileSync(__dirname + '/../templates/index.html', 'utf8');

        this.events = {
            "click #add-left-button": "addButton"
        };

    }

    render() {
        this.$el.html(_.template(this.template, this.vars))
        return this;
    }

    addButton(event) {


        let leftMenu = $('#left-menu');
        leftMenu.append($('<core-item icon="settings" label="item' + (leftMenu.children().length + 1) + '"></core-item>'));


    }




}

export default IndexView;
