YAL.Views.AnimeIndex = Backbone.View.extend({
  template: JST['anime/index'],

  initialize: function() {},

  events: {},

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})