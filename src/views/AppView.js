define(function(require, exports, module) {
  // import dependencies
  var View = require('famous/core/View'),
      Modifier = require('famous/core/Modifier'),
      Transform = require('famous/core/Transform'),
      StateModifier = require('famous/modifiers/StateModifier'),
      ImageSurface = require('famous/surfaces/ImageSurface'),
      Surface = require('famous/core/Surface'),
      Utility = require('famous/utilities/Utility'),
      MenuView = require('views/menu/MenuView');

  function AppView() {
    View.apply(this, arguments);

    var self = this;

    //_createSpinner.call(this);

    Utility.loadURL("src/data/structure.json", function(data) {
      _createMenu.call(self, data);
    });

  }

  AppView.prototype = Object.create(View.prototype);
  AppView.prototype.constructor = AppView;

  AppView.DEFAULT_OPTIONS = {
    size: [undefined, undefined],
    structure_url: null,
    content_url: null,
    menuPadding: 10
  };

  function _createSpinner() {
    // your app here
    var logo = new ImageSurface({
        size: [200, 200],
        content: 'http://code.famo.us/assets/famous_logo.svg',
        classes: ['double-sided']
    });

    var initialTime = Date.now();
    var centerSpinModifier = new Modifier({
        origin: [0.5, 0.5],
        transform : function(){
            return Transform.rotateY(.002 * (Date.now() - initialTime));
        }
    });

    this.add(centerSpinModifier).add(logo);
  }

  function _createMenu(data) {
    data = JSON.parse(data);

    console.log("menu size is appview is", this.options.size);

    // menu view
    var menuView = new MenuView({
      sections: data,
      screenSize: this.options.size,
      padding: this.options.menuPadding
    });
    this.add(menuView);
  }

  module.exports = AppView;
});
