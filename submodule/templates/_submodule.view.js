(function () {
    App.module('<%= moduleClass %>', function (<%= moduleBaseClass %>, App, Backbone, Marionette, $, _) {

        // general rule: attributes before methods
        <%= moduleBaseClass %>.View = App.Views.Layout.extend({
            template: '<%= templatePath %>',
            className: 'submodule-main other-class',
            id: 'submodule-id',
            tagName: 'div',
            regions: {
                testRegion: '.example-region'
            },

            events: {
                'click .child-selector': 'doStuff'
            },
            modelEvents: {
                'invalid': 'showError'
            },
            // collections, and other views can listen
            // to these triggers on the view
            // ex: view.on('thing:clicked');
            triggers: {
                'click .things': 'thing:clicked'
            },

            initialize: function(options) {
                
            },

            onShow: function() {
                // ...
            }
        });
        
        // Other views relating to this submodule below
        <%= moduleBaseClass %>.ListView = App.Views.CompositeView.extend({
            template: 'example/list-view',
            itemViewContainer: '.list-container',
            itemView: Submodule.ListItem,
            tagName: 'ul'
        });
        
        <%= moduleBaseClass %>.ListItem = App.Views.ItemView.extend({
            template: 'example/list-item',
            tagName: 'li',
            className: 'list-item'
        });


    });
})(this);