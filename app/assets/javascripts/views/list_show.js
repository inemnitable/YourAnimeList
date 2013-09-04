YAL.Views.ListShow = Backbone.View.extend({
  template: JST['list/show'],

  initialize: function(list) {
    this.list = list;
    this.editProgress = false;
  },

  events: {
    "click .progressLink" : "progressLinkClick",
    "submit .progressForm" : "progressFormSubmit"
  },

  render: function() {
    var content = this.template({
      list: this.list,
      editProgress: this.editProgress
    });
    this.$el.html(content);
    return this;
  },

  progressLinkClick: function(event) {
    event.preventDefault();
    var itemId = $(event.currentTarget).data("itemid");
    this.editProgress = itemId;
    console.log(this.editProgress);
    this.render();
    $('.progressInput').focus()
  },

  progressFormSubmit: function(event) {
    var that = this
    event.preventDefault();
    $form = $(event.currentTarget);
    var itemId = $form.data("itemid");
    var item = this.list.get("items").get(itemId);
    item.save($form.serializeJSON(), {
      success: function() {
        that.editProgress = false;
        that.render();
      },
      error: function(model, resp) {
        console.log(resp.responseJSON);
      }
    });
  }

})