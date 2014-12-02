define(function(require, exports, module) {
  // Import additional modules to be used in this view 
  var View = require('famous/core/View'),
      Surface = require('famous/core/Surface'),
      Transform = require('famous/core/Transform'),
      StateModifier = require('famous/modifiers/StateModifier');

  function PageView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      origin: [0, 0],
      align: [0, 0],
      size: [this.options.size[0] - this.options.margin*2, this.options.size[1]],
      transform: Transform.translate(this.options.margin/2, (this.options.order + 1)*(this.options.size[1] + this.options.margin), 0)
    });

    this.pageNode = this.add(this.rootModifier);

    _createPage.call(this);
  }

  // inherit from famo.us view
  PageView.prototype = Object.create(View.prototype);
  PageView.prototype.constructor = PageView;

  PageView.DEFAULT_OPTIONS = {
    screenSize: [undefined, undefined],
    size: [undefined, undefined],
    order: 0,
    title: "",
    author: "",
    content: null,
    margin: 20
  };

  function _createPage() {
    var bg = new Surface({
      classes: ['page-bg']
    });
    var content = new Surface({
      content: this.options.title,
      classes: ['page-content']
    });
    this.pageNode.add(bg);
    this.pageNode.add(content);
    console.log(content);
  }

  module.exports = PageView;

});