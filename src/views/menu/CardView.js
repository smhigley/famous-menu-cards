define(function(require, exports, module) {
  // Import additional modules to be used in this view 
  var View = require('famous/core/View'),
      Surface = require('famous/core/Surface'),
      Transform = require('famous/core/Transform'),
      StateModifier = require('famous/modifiers/StateModifier');

  function CardView() {
    View.apply(this, arguments);
  }

  // inherit from famo.us view
  CardView.prototype = Object.create(View.prototype);
  CardView.prototype.constructor = CardView;

  CardView.DEFAULT_OPTIONS = {
    size: [undefined, undefined],
    position: null,
    pages: null
  };

  function _createCard() {
  }

  module.exports = CardView;

});