YAL.Views.AnimeShow = Backbone.View.extend({
  template: JST['anime/show'],

  initialize: function(options) {
    this.anime = YAL.anime;
    this.$el = options.$el;
  },

  events: {},

  render: function() {
    var content = this.template({anime:this.anime});
    this.$el.html(content);
    return this;
  }
})