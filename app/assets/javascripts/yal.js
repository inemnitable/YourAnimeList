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
      YAL.listRouter = new YAL.Routers.ListRouter({
        $el: $("div.main")
      });
	    YAL.dialog = $('<div style="width: 95% !important">');
			YAL.listAddRouter = new YAL.Routers.ListAddRouter({
				$el: YAL.dialog
			});
			YAL.listItemEditRouter = new YAL.Routers.ListItemEditRouter({
				$el: YAL.dialog
			});
    } else if (page === "list_items/new") {
      YAL.listAddRouter = new YAL.Routers.ListAddRouter();
    } else if (/^list_item\/\d+\/edit/.test(page)) {
    	YAL.listItemId = (/^list_item\/(\d+)\/edit/.exec(page))[1];
			YAL.listItemEditRouter = new YAL.Routers.ListItemEditRouter();
		}
    YAL.currentViews = [];
		YAL.dialogViews = [];
    YAL.currentUser = new YAL.Models.User(userJSON);
    Backbone.history.start({silent: true});
		Backbone.history.navigate("", {trigger: true});
  },

	removeDialogViews: function() {
		if (YAL.dialogViews.length > 0) {
			_.invoke(YAL.dialogViews, 'remove');
			YAL.dialogViews = [];
		}
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
