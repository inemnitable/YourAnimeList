YAL.Views.AnimeSearchBox = Backbone.View.extend({
  template: JST['anime/search_box'],

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
    console.log(formData);
    $.ajax({
      url: "/anime/search?" + formData,
      success: function(data) {
        YAL.searchResults = new YAL.Collections.Anime(data)
        YAL.searchResultView.render();
      }
    });
  }
})