YAL.Routers.ListRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.$el;
    this.listId = options.listId
  },

  routes: {
    "" : "listShow"
  },

  listShow: function() {
    console.log("rendering list");
    var list = YAL.list;
    var that = this;
    function renderFunction() {
      YAL.removeOldView();
      var view = YAL.currentView = new YAL.Views.ListShow(list);
      that.$el.html(view.render().$el);
    }
    if (list) {
      renderFunction();
    } else {
      list = YAL.list = new YAL.Models.List(this.listId);
      list.fetch({
        success: renderFunction,
        error: function(model, resp) {
          console.log(resp.responseJSON);
        }
      });
    }
  }
})