YAL.Routers.ListItemEditRouter = Backbone.Router.extend({
	initialize: function(options) {
		this.$el = options.$el
		this.$container = $('<div class="container">');
	},

	routes: {
		"listItem/:itemId/edit" : "listItemEdit"
	},

	listItemEdit: function(itemId) {
		console.log("list item edit called with itemId " + itemId);
		YAL.removeDialogViews();
		var editView = new YAL.Views.ListItemEditView({
			$el: this.$container,
			itemId: itemId
		});
		YAL.dialogViews.push(editView);
		editView.render();
		this.$el.html(this.$container);
	}
});