(function() {
    App.module('<%= moduleClass %>', function (<%= moduleClass %>, App, Backbone, Marionette, $, _) {
        // can start with: App.Example.start()
        this.startWithParent = false;

        <%= moduleClass %>.Router = Backbone.Marionette.AppRouter.extend({
             appRoutes: {
                 "<%= _.slugify(moduleName) %>(/)": "show"
             }
        });

        // every route should have an associated handler, that reference
        // the same api call
        var API = {
            show: function (options) {
                new <%= moduleClass %>.Base.Controller({
                    region: App.getRegion('mainContent')
                });
            }
        };

        // if you want the routes available when the app starts,
        // it has to load in with the app on initialize
        App.addInitializer(function () {
            new <%= moduleClass %>.Router({
                 controller: API
             });

            // pass data between routes without storing in the URL
            App.commands.setHandler('<%= moduleName %>:base:show', function(options) {
                API.form(options);
            });
        });

        <%= moduleClass %>.on("before:start", function(){
          // do stuff before the module is started
        });
        
        <%= moduleClass %>.on("start", function(){
          // do stuff after the module has been started
        });
    });
})(this);