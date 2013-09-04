YAL.Models.List = Backbone.Model.extend({
  url: function() {
    return "/lists/" + YAL.listId
  },

  parse: function(data) {
    data.items = new YAL.Collections.ListItems(data.items);
    return data;
  }
})