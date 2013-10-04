YAL.Routers.ListRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.$el;
  },

  routes: {
    "" : "listShow"
  },

  listShow: function() {
    var list = YAL.list;
    var that = this;
    function renderFunction() {
      YAL.removeOldViews();
      var view = new YAL.Views.ListShow({
        list: list,
        $el: that.$el
      });
      YAL.currentViews.push(view);
      view.render();
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