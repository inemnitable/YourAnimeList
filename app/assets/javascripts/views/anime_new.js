YAL.Views.AnimeNew = Backbone.View.extend({
	template: JST['anime/new'],

	initialize: function() {
		this.anime = new YAL.Models.Anime();
	},

	events: {
		"submit form" : "formSubmit"
	},

	render: function() {
		var content = this.template({anime: this.anime});
		this.$el.html(content);
		return this;
	},

	formSubmit: function(event) {
		event.preventDefault();
		var formData = $(event.currentTarget).serializeJSON();
		this.anime.save(formData, {
			success: function(model) {
				console.log("anime created in database");
				Backbone.history.navigate("listItem/new", {trigger: true});
			},
			error: function(model, resp){
				console.log(resp.responseJSON);
			}
		});
	}
})