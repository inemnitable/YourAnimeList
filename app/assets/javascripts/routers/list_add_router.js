YAL.Routers.ListAddRouter = Backbone.Router.extend({
  initialize: function(options) {
		this.$el = options.$el;
		this.$listAddOutline = $(JST['list_item/outline']())
		this.$listAddContainer = this.$listAddOutline.find('div.container');
    this.$searchBox = this.$listAddContainer.find('div.search_box');
    this.$searchResults = this.$listAddContainer.find('div.search_results');
    this.$detailBar = this.$listAddContainer.find('div.right_bar');
		$('a.databaseAdd').on("click", this.databaseAdd);
  },

  routes: {
		"anime/new" : "animeNew",
    "listItem/new" : "listAdd"
  },

  listAdd: function() {
		console.log("routed to list add");
    YAL.removeDialogViews();
    var searchView = new YAL.Views.ListItemSearchBox(this.$searchBox);
		YAL.dialogViews.push(searchView);
    searchView.render();
    var searchResultView = YAL.searchResultView =
      new YAL.Views.ListItemSearchResults(this.$searchResults);
		YAL.dialogViews.push(searchResultView);
    var detailView = YAL.detailView =
      new YAL.Views.ListItemAddDetail(this.$detailBar);
		YAL.dialogViews.push(detailView);
		this.$el.html(this.$listAddOutline);
  },

	animeNew: function() {
		console.log("resizing");
		YAL.dialog.dialog("option", "title", "Add Anime to Database");
		YAL.dialog.dialog("option", "height", 300);
		YAL.dialog.dialog("option", "width", 400);
	}
})