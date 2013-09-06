YAL.Routers.AnimeRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.$el;
  },

  routes: {
    "" : "index"
  },

  index: function() {
    var that = this;
    YAL.removeOldView();
    var view = YAL.currentView = new YAL.Views.AnimeIndex();
    that.$el.html(view.render().$el);
  }
})