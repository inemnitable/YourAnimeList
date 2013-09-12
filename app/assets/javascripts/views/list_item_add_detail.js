YAL.Views.ListItemAddDetail = Backbone.View.extend({
  template: JST['list_item/detail'],

  initialize: function($el) {
    this.$el = $el;
    YAL.detailAnime = YAL.detailAnime || new YAL.Models.Anime();
    this.display = false;
  },

  events: {
    "submit form" : "formSubmit"
  },

  render: function() {
    if (this.display) {
      YAL.detailAnime.set("anime_id", YAL.detailAnime.get("id"));
      var content = this.template({anime: YAL.detailAnime});
      this.$el.html(content);
    } else {
      this.$el.html("");
    }
    return this;
  },

  formSubmit: function(event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    formData.user_id = YAL.currentUser.get("id");
    var listItems = window.parent.YAL.list.get("items");
    listItems.create(formData, {
      success: function(model) {
        YAL.searchResults.remove(YAL.detailAnime);
        YAL.detailAnime = null;
        YAL.listAddRouter.listAdd();
        // YAL.searchResultView.render();
//        YAL.detailView = new YAL.Views.ListItemAddDetail()
//        YAL.detailView.render();
      },
      error: function(model, response) {
        console.log(response.responseJSON);
      }
    });
  }
});