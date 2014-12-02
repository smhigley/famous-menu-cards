define(function(require, exports, module) {
  // Import additional modules to be used in this view 
  var View = require('famous/core/View'),
      Surface = require('famous/core/Surface'),
      Transform = require('famous/core/Transform'),
      StateModifier = require('famous/modifiers/StateModifier'),
      CardView = require('views/menu/CardView');

  function MenuView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      origin: [0.5, 0],
      align: [0.5, 0],
      size: this.options.screenSize
    });

    this.mainNode = this.add(this.rootModifier);

    _addBG.call(this);
    _addCards.call(this);
  }

  // inherit from famo.us view
  MenuView.prototype = Object.create(View.prototype);
  MenuView.prototype.constructor = MenuView;

  MenuView.DEFAULT_OPTIONS = {
    sections: [],
    screenSize: [undefined, undefined],
    cardSize: [350, 400],
    padding: 10
  };

  function _addBG() {
    var bg = new Surface({
      classes: ['menu-bg']
    });

    this.mainNode.add(bg);
  }

  function _addCards() {
    var grid_cols = Math.floor(this.options.screenSize[0]/this.options.cardSize[0]),
        grid_rows = Math.ceil(this.options.sections.length/grid_cols);

    this.cards = [];

    for (var i = 0; i < this.options.sections.length; i++) {
      var col = i % grid_cols,
          row = Math.floor(i/grid_cols);

      this.cards.push(new CardView({
        screenSize: this.options.screenSize,
        size: this.options.cardSize,
        padding: this.options.padding,
        position: [col, row],
        order: i,
        title: this.options.sections[i].title,
        pages: this.options.sections[i].pages
      }));
      this.cards[i].pipe(this._eventInput);

      this.mainNode.add(this.cards[i]);
      this.cards[i].animateIn();
    };
  }

  module.exports = MenuView;

});