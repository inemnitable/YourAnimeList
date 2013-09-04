window.YAL = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    page = $('body').data("page");
    if (/^lists\/\w+/.test(page)) {
      console.log(page);
      YAL.listId = (/^lists\/(\w+)/.exec(page))[1]
      YAL.ListRouter = new YAL.Routers.ListRouter({
        $el: $("div.main")
       });
    }
    YAL.currentView = null;
    Backbone.history.start();
  },

  removeOldView: function() {
    if (YAL.currentView) {
      YAL.currentView.remove();
      YAL.currentView = null;
    }
  }
};

$(document).ready(function(){
  YAL.initialize();
});
