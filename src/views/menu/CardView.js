define(function(require, exports, module) {
  // Import additional modules to be used in this view 
  var View = require('famous/core/View'),
      Surface = require('famous/core/Surface'),
      Transform = require('famous/core/Transform'),
      StateModifier = require('famous/modifiers/StateModifier'),
      Transitionable = require('famous/transitions/Transitionable'),
      SpringTransition = require('famous/transitions/SpringTransition'),
      Timer = require('famous/utilities/Timer'),
      PageView = require('views/page/PageView');

  function CardView() {
    View.apply(this, arguments);

    Transitionable.registerMethod('spring', SpringTransition);
    this.spring = {
      method: 'spring',
      period: 450,
      dampingRatio: 0.6
    };

    this.offsetLeft = this.options.position[0] * this.options.size[0] + this.options.padding;
    this.offsetTop = this.options.position[1] * this.options.size[1] + this.options.padding;

    this.rootModifier = new StateModifier({
      origin: [0, 0],
      align: [0, 0],
      size: [this.options.size[0] - this.options.padding*2, this.options.size[1] - this.options.padding*2],
      transform: Transform.translate(this.offsetLeft, -this.options.size[1], 0)
    });

    this.cardNode = this.add(this.rootModifier);

    _createCard.call(this);
    _addPages.call(this);
  }

  // inherit from famo.us view
  CardView.prototype = Object.create(View.prototype);
  CardView.prototype.constructor = CardView;

  CardView.DEFAULT_OPTIONS = {
    screenSize: [undefined, undefined],
    size: [undefined, undefined],
    padding: 10,
    position: null,
    order: 1,
    title: "",
    pages: null
  };

  function _createCard() {
    var bg = new Surface({
      classes: ['card-bg']
    });
    var title = new Surface({
      content: "Stories <span>from</span> " + this.options.title,
      classes: ['card-title'],
      origin: [0.5, 0],
      align: [0.5, 0],
      size: [undefined, 50]
    });
    this.cardNode.add(bg);
    this.cardNode.add(title);
  }

  function _addPages() {
    this.pages = [];
    for (var i = 0; i < this.options.pages.length; i++) {
      this.pages.push(new PageView({
        screenSize: this.options.screenSize,
        size: [this.options.size[0], 50],
        order: i,
        title: this.options.pages[i].title,
        author: this.options.pages[i].author,
        content: this.options.pages[i].filename
      }));
      this.cardNode.add(this.pages[i]);
    };
  }

  CardView.prototype.animateIn = function() {
    var self = this,
        delay = this.options.order * 200;

    Timer.setTimeout(function() {
      self.rootModifier.setTransform(Transform.translate(self.offsetLeft, self.offsetTop, 0), self.spring);
    }, delay);
  }

  module.exports = CardView;

});