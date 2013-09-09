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
    var page = $('body').data("page");
    if (/^lists\/\w+/.test(page)) {
      YAL.listId = (/^lists\/(\w+)/.exec(page))[1];
      YAL.ListRouter = new YAL.Routers.ListRouter({
        $el: $("div.main")
       });
    } else if (page === "list_items/new") {
      YAL.ListAddRouter = new YAL.Routers.ListAddRouter();
    } else if (/^list_item\/\d+\/edit/.test(page)) {
    	YAL.listItemId = (/^list_item\/(\d+)\/edit/.exec(page))[1];
			YAL.ListItemEditRouter = new YAL.Routers.ListItemEditRouter();
    }
    YAL.currentViews = [];
    YAL.currentUser = new YAL.Models.User(userJSON);
    Backbone.history.start();
  },

  removeOldViews: function() {
    if (YAL.currentViews.length > 0) {
      _.invoke(YAL.currentViews, 'remove');
      YAL.currentViews = [];
    }
  }
};

$(document).ready(function(){
  YAL.initialize();
});
