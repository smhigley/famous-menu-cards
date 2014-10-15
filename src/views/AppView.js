define(function(require, exports, module) {
  // import dependencies
  var View = require('famous/core/View'),
      Modifier = require('famous/core/Modifier'),
      Transform = require('famous/core/Transform'),
      StateModifier = require('famous/modifiers/StateModifier'),
      ImageSurface = require('famous/surfaces/ImageSurface');

  function AppView() {
    View.apply(this, arguments);

    _createSpinner.call(this);
  }

  AppView.prototype = Object.create(View.prototype);
  AppView.prototype.constructor = AppView;

  AppView.DEFAULT_OPTIONS = {};

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

  module.exports = AppView;
});
