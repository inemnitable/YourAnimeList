YAL.Views.ListItemEditView = Backbone.View.extend({
  template: JST["list_item/edit"],

  initialize: function(options) {
    this.$el = options.$el;
    this.listItem = YAL.list.get("items").get(options.itemId);
    console.log(this.listItem);
  },

  events: {
    "submit form": "formSubmit",
    "click a.removeLink": "removeLink"
  },

  render: function() {
    var content = this.template({anime: this.listItem});
    this.$el.html(content);
    return this;
  },

  formSubmit: function(event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    console.log(this.listItem);
    this.listItem.save(formData, {
      success: function(model) {
        console.log("anime successfully updated");
        YAL.dialog.dialog("close");
      },
      error: function(model, response) {
        console.log(response.responseJSON);
      }
    })
  },

  removeLink: function(event) {
    event.preventDefault();
    this.listItem.destroy({
      success: function(model) {
        console.log("anime successfully deleted");
        YAL.dialog.dialog("close");
      },
      error: function(model, response) {
        console.log(response.responseJSON);
      },
    })
  }
})