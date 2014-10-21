define(function(require, exports, module) {
  // Import additional modules to be used in this view 
  var View = require('famous/core/View'),
      Surface = require('famous/core/Surface'),
      Transform = require('famous/core/Transform'),
      StateModifier = require('famous/modifiers/StateModifier');

  function MenuView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      origin: [0.5, 0],
      align: [0.5, 0],
      size: this.options.size
    });

    this.mainNode = this.add(this.rootModifier);

    _addBG.call(this);
    _addCards.call(this);
  }

  // inherit from famo.us view
  MenuView.prototype = Object.create(View.prototype);
  MenuView.prototype.constructor = MenuView;

  MenuView.DEFAULT_OPTIONS = {
    pages: null,
    size: [undefined, undefined]
  };

  function _addBG() {
    console.log("view size is", this.options.size);
    var bg = new Surface({
      classes: ['menu-bg']
    });

    this.mainNode.add(bg);
  }

  function _addCards() {
    for (var id in this.options.pages) {
      console.log(this.options.pages[id]);
      // create a card
    };
  }

  module.exports = MenuView;

});