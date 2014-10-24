define(function(require, exports, module) {
  // Import additional modules to be used in this view 
  var View = require('famous/core/View'),
      Surface = require('famous/core/Surface'),
      Transform = require('famous/core/Transform'),
      StateModifier = require('famous/modifiers/StateModifier');

  function PageView() {
    View.apply(this, arguments);
  }

  // inherit from famo.us view
  PageView.prototype = Object.create(View.prototype);
  PageView.prototype.constructor = PageView;

  PageView.DEFAULT_OPTIONS = {
    order: 0,
    title: "",
    content: null
  };

  module.exports = PageView;

});