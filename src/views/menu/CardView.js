define(function(require, exports, module) {
  // Import additional modules to be used in this view 
  var View = require('famous/core/View'),
      Surface = require('famous/core/Surface'),
      Transform = require('famous/core/Transform'),
      StateModifier = require('famous/modifiers/StateModifier');

  function CardView() {
    View.apply(this, arguments);

    this.offsetLeft = this.options.position[0] * this.options.size[0] + this.options.padding;
    this.offsetTop = this.options.position[1] * this.options.size[1] + this.options.padding;

    this.rootModifier = new StateModifier({
      origin: [0, 0],
      align: [0, 0],
      size: [this.options.size[0] - this.options.padding*2, this.options.size[1] - this.options.padding*2],
      transform: Transform.translate(this.offsetLeft, this.offsetTop, 0)
    });

    this.cardNode = this.add(this.rootModifier);

    _createCard.call(this);
  }

  // inherit from famo.us view
  CardView.prototype = Object.create(View.prototype);
  CardView.prototype.constructor = CardView;

  CardView.DEFAULT_OPTIONS = {
    screenSize: [undefined, undefined],
    size: [undefined, undefined],
    padding: 10,
    position: null,
    title: "",
    pages: null
  };

  function _createCard() {
    var bg = new Surface({
      classes: ['card-bg']
    });
    var title = new Surface({
      content: this.options.title,
      classes: ['card-title'],
      origin: [0.5, 0],
      align: [0.5, 0],
      size: [undefined, 50]
    })
    this.cardNode.add(bg);
    this.cardNode.add(title);
  }

  module.exports = CardView;

});