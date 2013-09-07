window.YAL = {
  STATUSES: ["Completed", "Watching", "Dropped", "Plan to Watch", "On Hold"],
  RATINGS: ["", "Unwatchable", "Horrible", "Very Bad", "Bad", "Average",
            "Fine", "Good", "Very Good", "Excellent", "Masterpiece"],
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var userJSON = JSON.parse($('#bootstrap-user').html());
    page = $('body').data("page");
    if (/^lists\/\w+/.test(page)) {
      YAL.listId = (/^lists\/(\w+)/.exec(page))[1]
      YAL.ListRouter = new YAL.Routers.ListRouter({
        $el: $("div.main")
       });
    } else if (page === "anime/index") {
      YAL.AnimeRouter = new YAL.Routers.AnimeRouter({
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
