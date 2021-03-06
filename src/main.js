define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine'),
        AppView = require('views/AppView');

    // create the main context
    var mainContext = Engine.createContext(),
        contextSize = mainContext.getSize(),
        appView = new AppView({
          size: contextSize,
          structure_url: "src/data/structure.json",
          content_url: "src/data/content.json",
          menuPadding: 10
        });

    console.log("context size is", contextSize, appView.options.size);

    mainContext.add(appView);
});
