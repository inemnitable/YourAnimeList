YAL.Routers.ListAddRouter = Backbone.Router.extend({
  initialize: function(options) {
		YAL.removeDialogViews();
		this.$el = options.$el;
		this.$listAddOutline = $(JST['list_item/outline']())
		this.$listAddContainer = this.$listAddOutline.find('div.container');
    this.$searchBox = this.$listAddContainer.find('div.search_box');
    this.$searchResults = this.$listAddContainer.find('div.search_results');
    this.$detailBar = this.$listAddContainer.find('div.right_bar');
  },

  routes: {
		"anime/new" : "animeNew",
    "listItem/new" : "listAdd"
  },

  listAdd: function() {
		YAL.dialog.dialog("option", {
			title: "Edit Anime",
			height: 660,
			width: 800
		})
		console.log("routed to list add");
    YAL.undelegateDialogEvents();
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
		YAL.delegateDialogEvents();
  },

	animeNew: function() {
		console.log("resizing");
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
	}
})