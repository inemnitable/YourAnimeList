YAL.Views.AnimeAddDetail = Backbone.View.extend({
  template: JST['anime/detail_form'],

  initialize: function($el) {
    this.$el = $el;
    YAL.detailAnime = YAL.detailAnime || new YAL.Models.Anime();
  },

  events: {
    "submit form" : "formSubmit"
  },

  render: function() {
    var content = this.template({anime: YAL.detailAnime});
    this.$el.html(content);
    return this;
  },

  formSubmit: function(event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    formData.user_id = YAL.currentUser.get("id");
    var listItems = window.parent.YAL.list.get("items");
    listItems.create(formData, {
      success: function(model) {
        console.log("anime successfully added");
        window.parent.YAL.dialog.dialog("close");
      },
      error: function(model, response) {
        console.log("response.responseJSON");
      }
    });
  }
});