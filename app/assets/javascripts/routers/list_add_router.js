YAL.Routers.ListAddRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$searchBox = $('div.search_box');
    this.$searchResults = $('div.search_results');
    this.$detailBar = $('div.right_bar')
  },

  routes: {
    "" : "listAdd"
  },

  listAdd: function() {
    YAL.removeOldViews();
    var searchView = new YAL.Views.ListItemSearchBox();
		YAL.currentViews.push(searchView);
    this.$searchBox.html(searchView.render().$el);
    var searchResultView = YAL.searchResultView =
      new YAL.Views.ListItemSearchResults(this.$searchResults);
		YAL.currentViews.push(searchResultView);
    var detailView = YAL.detailView =
      new YAL.Views.ListItemAddDetail(this.$detailBar);
		YAL.currentViews.push(detailView);
  },
})