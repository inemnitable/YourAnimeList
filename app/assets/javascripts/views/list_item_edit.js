YAL.Views.ListItemEditView = Backbone.View.extend({
	template: JST["list_item/edit"],

	initialize: function() {
		this.listItem = window.parent.YAL.list.get("items").get(YAL.listItemId);
	},

	events: {
		"submit form": "formSubmit",
		"click .removeLink": "remove"
	},

	render: function() {
		var content = this.template({anime: this.listItem});
		this.$el.html(content);
		return this;
	},

	formSubmit: function(event) {
		event.preventDefault();
		var formData = $(event.currentTarget).serializeJSON();
		console.log(this.listItem);
		this.listItem.save(formData, {
			success: function(model) {
				console.log("anime successfully updated");
				window.parent.YAL.dialog.dialog("close");
			},
			error: function(model, response) {
				console.log(response.responseJSON);
			}
		})
	},

	remove: function(event) {
		event.preventDefault();
		this.listItem.destroy({
			success: function(model) {
				console.log("anime successfully deleted");
				window.parent.YAL.dialog.dialog("close");
			},
			error: function(model, response) {
				console.log(response.responseJSON);
			},
		})
	}
})