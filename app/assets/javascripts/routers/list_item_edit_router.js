YAL.Routers.ListItemEditRouter = Backbone.Router.extend({
	initialize: function() {
		this.$el = $('div.container');
	},

	routes: {
		"" : "listItemEdit"
	},

	listItemEdit: function() {
		YAL.removeOldViews();
		var editView = new YAL.Views.ListItemEditView(this.$el);
		YAL.currentViews.push(editView);
		this.$el.html(editView.render().$el);
		console.log(this.$el);
		console.log(editView);
	}
});