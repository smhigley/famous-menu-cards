define(function(require, exports, module) {
  // Import additional modules to be used in this view 
  var View = require('famous/core/View'),
      Surface = require('famous/core/Surface'),
      Transform = require('famous/core/Transform'),
      StateModifier = require('famous/modifiers/StateModifier');

  function CardView() {
    View.apply(this, arguments);

    console.log("card view");

    this.rootModifier = new StateModifier({
      origin: [0, 0],
      align: [0, 0],
      x: this.options.position[0] * this.options.size[0],
      y: this.options.position[1] * this.options.size[1]
    });

    this.cardNode = this.add(this.rootModifier);

    _createCard.call(this);
  }

  // inherit from famo.us view
  CardView.prototype = Object.create(View.prototype);
  CardView.prototype.constructor = CardView;

  CardView.DEFAULT_OPTIONS = {
    size: [undefined, undefined],
    screenSize: [undefined, undefined],
    position: null,
    pages: null
  };

  function _createCard() {
    var bg = new Surface({
      size: this.options.size,
      classes: ['card-bg']
    });
    this.cardNode.add(bg);
  }

  module.exports = CardView;

});