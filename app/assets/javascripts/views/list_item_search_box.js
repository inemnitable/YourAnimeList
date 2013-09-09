YAL.Views.ListItemSearchBox = Backbone.View.extend({
  template: JST['list_item/search_box'],

  initialize: function() {},

  events: {"submit form" : "search"},

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  search: function(event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serialize();
    $.ajax({
      url: "/anime/search?" + formData,
      success: function(data) {
        YAL.searchResults = new YAL.Collections.Anime(data);
        YAL.searchResultView.render();
      }
    });
  }
});