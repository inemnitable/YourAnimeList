YAL.Views.ListShow = Backbone.View.extend({
  template: JST['list/show'],

  initialize: function(list) {
    this.list = list;
  },

  events: {
    //all the click events
  },

  render: function() {
    var content = this.template({list: this.list});
    this.$el.html(content);
    return this;
  }
})