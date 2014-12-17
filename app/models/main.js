class Application extends Backbone.Model {

  constructor (args) {
    super(args) /* mandatory */

    //Getters and Setters : properties
    Object.defineProperty(this, "title", {
      get: function (){ return this.get("firstName")} ,
      set: function (value) { this.set("firstName",value); }
    });

    addMenuItem(itemName = 'item') {

        $('core-menu').append($('<core-item label="' + itemName + '"></core-item>'));

    }

  }
}

export default Application;
