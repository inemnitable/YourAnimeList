YAL.Routers.ListAddRouter = Backbone.Router.extend({
  initialize: function(options) {
    YAL.removeDialogViews();
    this.resetSearch();
    this.$el = options.$el;
    this.$listAddOutline = $(JST['list_item/outline']())
    this.$listAddContainer = this.$listAddOutline.find('div.container');
    this.$searchBox = this.$listAddContainer.find('div.search_box');
    this.$searchResults = this.$listAddContainer.find('div.search_results');
    this.$detailBar = this.$listAddContainer.find('div.right_bar');
  },

  routes: {
    "newAnime" : "animeNew",
    "listItem/new" : "listAdd"
  },

  listAdd: function() {
    YAL.dialog.dialog("option", {
      title: "Add Anime to List",
      height: 660,
      width: 800
    })
    YAL.undelegateDialogEvents();
    var searchView = new YAL.Views.ListItemSearchBox(this.$searchBox);
    YAL.dialogViews.push(searchView);
    searchView.render();
    var searchResultView = YAL.searchResultView =
      new YAL.Views.ListItemSearchResults(this.$searchResults);
    YAL.dialogViews.push(searchResultView);
    searchResultView.render();
    var detailView = YAL.detailView =
      new YAL.Views.ListItemAddDetail(this.$detailBar);
    YAL.dialogViews.push(detailView);
    detailView.render();
    this.$el.html(this.$listAddOutline);
    YAL.delegateDialogEvents();
    this.$searchBox.find('input#search').focus();
  },

  animeNew: function() {
    YAL.dialog.dialog("option", {
      title: "Add Anime to Database",
      height: 300,
      width: 400
    })
    YAL.undelegateDialogEvents();
    var view = new YAL.Views.AnimeNew();
    YAL.dialogViews.push(view);
    this.$el.html(view.render().$el);
    YAL.delegateDialogEvents();
  },

  resetSearch: function() {
    YAL.searchResults = null;
    YAL.detailAnime = null;
  }
})