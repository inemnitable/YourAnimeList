YAL.Views.AnimeEdit = Backbone.View.extend({
  template: JST['anime/edit'],
  initialize: function(options) {
    this.anime = YAL.anime;
    this.$el = options.$el;
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
    var that = this;
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    this.anime.save(formData, {
      success: function(model) {
        console.log("anime update in database");
        Backbone.history.navigate("anime/" + that.anime.get("id"), {trigger: true});
        YAL.list.fetch();
      },
      error: function(model, resp){
        console.log(resp.responseJSON);
      }
    });
  }
})