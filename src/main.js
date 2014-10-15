define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine'),
        AppView = require('views/AppView');

    // create the main context
    var mainContext = Engine.createContext(),
        appView = new AppView();

    mainContext.add(appView);
});
