YAL.Routers.AnimeEditRouter = Backbone.Router.extend({

  initialize: function(options) {
    this.$el = options.$el;
    this.$container = $('<div class="container">');
  },

  routes: {
    "anime/:id" : "animeShow",
    "anime/:id/edit" : "animeEdit"
  },

  animeShow: function(id) {
    console.log("anime show called with id " + id);
    YAL.removeDialogViews();
    var view = new YAL.Views.AnimeShow({
      $el: this.$container
    });
    YAL.dialogViews.push(view);
    view.render();
    this.$el.html(this.$container);
  },

  animeEdit: function(id) {
    console.log("anime edit called with id" + id);
    YAL.removeDialogViews();
    var view = new YAL.Views.AnimeEdit({
      $el: this.$container
    });
    YAL.dialogViews.push(view);
    view.render();
    this.$el.html(this.$container);
  }

});
