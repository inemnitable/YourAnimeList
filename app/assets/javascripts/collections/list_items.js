YAL.Collections.ListItems = Backbone.Collection.extend({
  model: YAL.Models.ListItem,

  sortKey: "title",

  comparator: function(item) {
    return item.get(this.sortKey)
  }
});