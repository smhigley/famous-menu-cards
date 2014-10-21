define(function(require, exports, module) {
  // Import additional modules to be used in this view 
  var View = require('famous/core/View'),
      Surface = require('famous/core/Surface'),
      Transform = require('famous/core/Transform'),
      StateModifier = require('famous/modifiers/StateModifier');

  function EmptyView() {
    View.apply(this, arguments);
  }

  // inherit from famo.us view
  EmptyView.prototype = Object.create(View.prototype);
  EmptyView.prototype.constructor = EmptyView;

  EmptyView.DEFAULT_OPTIONS = {};

  module.exports = EmptyView;

});