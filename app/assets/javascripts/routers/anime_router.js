YAL.Routers.AnimeRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$search_box = $('div.search_box');
    this.$search_results = $('div.search_results')
  },

  routes: {
    "" : "index"
  },

  index: function() {
    var that = this;
    YAL.removeOldView();
    var searchView = YAL.currentView = new YAL.Views.AnimeSearchBox();
    this.$search_box.html(searchView.render().$el);
    var searchResultView = YAL.searchResultView = new YAL.Views.AnimeSearchResults(this.$search_results);
  }
})