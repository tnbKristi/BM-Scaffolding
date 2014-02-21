(function() {
    App.module('Example', function (Example, App, Backbone, Marionette, $, _) {
        // can start with: App.Example.start()
        this.startWithParent = false;

        Example.Router = Backbone.Marionette.AppRouter.extend({
             appRoutes: {
                 "example(/)": "form"
             }
        });

        // every route should have an associated handler, that reference
        // the same api call
        var API = {
            form: function (options) {
                new Example.Form.Controller({
                    region: App.getRegion('mainContent')
                });
            }
        };

        // if you want the routes available when the app starts,
        // it has to load in with the app on initialize
        App.addInitializer(function () {
            new Example.Router({
                 controller: API
             });

            // pass data between routes without storing in the URL
            App.commands.setHandler('example:form:show', function(options) {
                API.form(options);
            });
        });

        Example.on("before:start", function(){
          // do stuff before the module is started
        });
        
        Example.on("start", function(){
          // do stuff after the module has been started
        });
    });
})(this);