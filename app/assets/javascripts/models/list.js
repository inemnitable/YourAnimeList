YAL.Models.List = Backbone.Model.extend({
  url: function() {
    return "/lists/" + this.listId
  },

  initialize: function(listId) {
    this.listId = listId;
  },

  parse: function(data) {
    data.items = new YAL.Collections.ListItems(data.items);
    return data;
  }
})