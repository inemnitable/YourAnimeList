YAL.Routers.AnimeRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$searchBox = $('div.search_box');
    this.$searchResults = $('div.search_results');
    this.$detailBar = $('div.right_bar')
  },

  routes: {
    "" : "index"
  },

  index: function() {
    var that = this;
    YAL.removeOldView();
    var searchView = YAL.currentView = new YAL.Views.AnimeSearchBox();
    this.$searchBox.html(searchView.render().$el);
    var searchResultView = YAL.searchResultView =
      new YAL.Views.AnimeSearchResults(this.$searchResults);
    var detailView = YAL.detailView =
      new YAL.Views.AnimeAddDetail(this.$detailBar);
  },
})