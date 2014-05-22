App.module('Entities.<%= moduleClass %>', function (<%= moduleBaseClass %>, App, Backbone, Marionette, $, _) {

  Entities.<%= moduleBaseClass %> = Entities.Model.extend({

  });

  Entities.<%= inf.pluralize(moduleBaseClass) %> = Entities.Model.extend({

  });

  App.reqres.setHandler('entities:<%= inf.humanize(moduleBaseClass, true) %>', function(id) {
    return new Entities.<%= moduleBaseClass %>({
      id: id
    });
  });

  App.reqres.setHandler('entities:<%= inf.pluralize(inf.humanize(moduleBaseClass, true)) %>', function() {
    return new Entities.<%= inf.pluralize(moduleBaseClass) %>();
  });

});