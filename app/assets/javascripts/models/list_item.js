YAL.Models.ListItem = Backbone.Model.extend({
  url: function() {
    return "/list_items/" + this.id
  }
});