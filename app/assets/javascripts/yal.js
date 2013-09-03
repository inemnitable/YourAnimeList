window.YAL = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // var page = $('body').data("page");
//     switch (page) {
//       case "list":
        YAL.ListRouter = new YAL.Routers.ListRouter($("div.main"));
      //   break;
      // case "home":
      //   //do stuff eventually
      //   break;
    // }
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
