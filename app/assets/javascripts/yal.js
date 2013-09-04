window.YAL = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var userJSON = JSON.parse($('#bootstrap-user').html());
    page = $('body').data("page");
    if (/^lists\/\w+/.test(page)) {
      console.log(page);
      YAL.listId = (/^lists\/(\w+)/.exec(page))[1]
      YAL.ListRouter = new YAL.Routers.ListRouter({
        $el: $("div.main")
       });
    }
    YAL.currentView = null;
    YAL.currentUser = new YAL.Models.User(userJSON);
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
