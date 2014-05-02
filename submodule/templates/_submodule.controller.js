 (function() {
    App.module('<%= moduleClass %>', function (<%= moduleBaseClass %>, App, Backbone, Marionette, $, _) {

        <%= moduleBaseClass %>.Controller = App.Controllers.Base.extend({
            // Rules to components:
            // called within this controller
            // uses a region inside this controllers baseView (aka Layout)
            // bound to this controller
            Components: {},
            activeComponents: undefined,

            initialize: function(options) {
                this.region = options.region;
                this.View = <%= moduleBaseClass %>.View;
                // example request to an entity (model or collection)
                // this.entity = App.request('entities:profile');
                
                // Example declaration of Components
                // this.Components = {
                //     Header: <%= moduleBaseClass %>.Header.Controller
                // }

                // Register active components once started with new
                this.activeComponents = {};

                // fetch would be wrapped in a promise like when:fetched
                // this.entity.fetch();
                
                // after dependencies are loaded, show the baseView
                this.showBaseView();
                
                // example of submodule call
                // this.showHeader();
                
            },

            // these two methods are good candidates for scaffolding
            getBaseView: function() {
                return new this.View({
                    model: this.entity
                });
            },

            showBaseView: function() {
                this.view = this.getBaseView();

                this.region.show(this.view);
            },
            
            // showHeader: function() {
            //     this.activeComponents.header = new <%= moduleBaseClass %>.Header({
            //         region: this.view.subRegion,
            //         entity: this.thing
            //     });
            // }
        });

    });
})(this);