 (function() {
    App.module('Example.Submodule', function (Submodule, App, Backbone, Marionette, $, _) {

        Submodule.Controller = App.Controllers.Base.extend({
            // Rules to components:
            // called within this controller
            // uses a region inside this controllers baseView (aka Layout)
            // bound to this controller
            Components: {
                Header: Submodule.Header.Controller,
                Sidebar: Submodule.Sidebar.Controller
            },
            activeComponents: undefined,

            initialize: function(options) {
                this.region = options.region;
                this.View = Submodule.View;
                this.entity = App.request('entities:profile');
                
                this.activeComponents = {};

                // fetch would be wrapped in a promise like when:fetched
                this.entity.fetch();
                
                // after dependencies are loaded, show the baseView
                this.showBaseView();
                
                // example of submodule call
                this.showHeader();
                
            },

            // these two methods are good candidates for scaffolding
            getBaseView: function() {
                return new this.View({
                    model: this.entity
                });
            },

            showBaseView: function() {
                var view = this.getBaseView();

                this.region.show(view);
            },
            
            showHeader: function() {
                this.activeComponents.header = new Submodule.Header({
                    region: this.view.subRegion
                    entity: this.thing
                });
            }
        });

    });
})(this);