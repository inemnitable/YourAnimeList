YAL.Views.ListShow = Backbone.View.extend({
  ESC: 27,

  template: JST['list/show'],

	status_change_template: JST['list_item/status_change'],

  initialize: function(list) {
    this.list = list;
    this.editProgress = false;
    this.editRating = false;
    this.listenTo(this.list.get("items"), "add change destroy", this.render);
		this.listenTo(this.list.get("items"),
									"add change",
									this.list.get("items").sort.bind(this.list.get("items")));
  },

  events: {
    "click .progressLink" : "progressLinkClick",
    "submit .progressForm" : "progressFormSubmit",
    "click .ratingLink" : "ratingLinkClick",
    "submit .ratingForm" : "ratingFormSubmit",
    "click .commentLink" : "commentLinkClick",
    "submit .commentForm" : "commentFormSubmit",
    "click .headTitle" : "titleSort",
    "click .headRating" : "ratingSort",
    "click .headType" : "typeSort",
    "click .headProgress" : "progressSort",
    "click .headComment" : "commentSort",
    "click .progressPlus" : "incProgress",
    "click .addAnime" : "addAnime",
		"click .editAnime" : "editAnime"
  },

  render: function() {
    var content = this.template({
      list: this.list,
      editProgress: this.editProgress,
      editRating: this.editRating,
      editComment: this.editComment
    });
    this.$el.html(content);
    return this;
  },

  progressLinkClick: function(event) {
    var that = this;
    this.editLinkClick(event, '.progressInput', function(itemId){
      that.editProgress = itemId;
    });
  },

  progressFormSubmit: function(event) {
    var that = this;
    this.formSubmit(event, function() {
      that.editProgress = false;
    });
		var itemId = $(event.currentTarget).closest('tr').data('itemid');
		var item = this.list.get("items").get(itemId);
		console.log(item.get("list_item").progress);
		if (parseInt(item.get("list_item").progress) === item.get("episode_count")) {
			this.askToChangeStatus("Completed", item);
		} else if (item.get("status") !== "Watching" && item.get("progress") > 0) {
			this.askToChangeStatus("Watching", item);
		}
  },

  ratingLinkClick: function(event) {
    var that = this;
    this.editLinkClick(event, '.ratingInput', function(itemId){
      that.editRating = itemId;
    });
  },

  ratingFormSubmit: function(event) {
    var that = this;
    this.formSubmit(event, function() {
      that.editRating = false;
    });
  },

  commentLinkClick: function(event) {
    var that = this;
    this.editLinkClick(event, '.commentInput', function(itemId){
      that.editComment = itemId;
    });
  },

  commentFormSubmit: function(event) {
    var that = this;
    this.formSubmit(event, function() {
      that.editComment = false;
    });
  },

  setRemoveFocusEvent: function() {
    $(document).on("keydown click", this.removeFocus.bind(this));
  },

  removeFocus: function(event) {
    if ($(event.target).is('input') && event.which !== this.ESC) return;
    this.focused = null;
    this.editProgress = false;
    this.editRating = false;
    this.editComment = false;
    this.render();
    $(document).off("keydown click");
  },

  formSubmit: function(event, callback){
    var that = this;
    event.preventDefault();
    $form = $(event.currentTarget);
    var itemId = $form.closest('tr').data("itemid");
    var item = this.list.get("items").get(itemId);
		callback();
    item.save($form.serializeJSON(), {
      success: function(model) {
				model.unset("list_item", {silent: true});
			},
      error: function(model, resp) {
        console.log(resp.responseJSON);
      }
    });
  },

  editLinkClick: function(event, focusTarget, callback){
    event.preventDefault();
    this.removeFocus(event);
    event.stopPropagation();
    var itemId = $(event.currentTarget).closest('tr').data("itemid");
    callback(itemId);
    this.render();
    $(focusTarget).focus();
    this.setRemoveFocusEvent();
  },

  sortEvent: function(event, sortTarget){
    console.log("sorting by " + sortTarget);
    event.preventDefault();
    var listItems = this.list.get("items");
    if (listItems.sortKey == sortTarget) listItems.sortOrder *= -1
    else listItems.sortOrder = 1;
    listItems.sortKey = sortTarget;
    listItems.sort();
    this.render();
  },

  titleSort: function(event) {
    this.sortEvent(event, "title");
  },

  ratingSort: function(event) {
    this.sortEvent(event, "rating");
  },

  typeSort: function(event) {
    this.sortEvent(event, "type");
  },

  progressSort: function(event) {
    this.sortEvent(event, "progress");
  },

  commentSort: function(event) {
    this.sortEvent(event, "comment");
  },

  incProgress: function(event) {
    event.preventDefault();
    var that = this;
    var itemId = $(event.currentTarget).closest('tr').data("itemid");
    var item = this.list.get("items").get(itemId);
    var progress = item.get("progress") || 0;
		if (progress + 1 === item.get("episode_count")) {
			this.askToChangeStatus("Completed", item);
		} else if (item.get("status") !== "Watching") {
			this.askToChangeStatus("Watching", item);
		}
    item.save({progress: progress + 1}, {
      error: function(model, resp) {
        console.log(resp.responseJSON);
      }
    });
  },

  addAnime: function(event) {
		event.preventDefault();
    YAL.dialog.dialog({
      appendTo: $('body'),
      autoOpen: true,
      closeOnEscape: true,
			dialogClass: 'popUpDialog',
      height: 660,
      width: 800,
      modal: true,
      title: "Add Anime to List",
			close: function() {
				YAL.listAddRouter.initialize({$el: YAL.dialog});
				Backbone.history.navigate("#", {trigger: true});
			}
    });
		Backbone.history.navigate("listItem/new", {trigger: true});
  },

	editAnime: function(event) {
		event.preventDefault();
		var itemId = $(event.currentTarget).closest('tr').data("itemid");
 		YAL.dialog.dialog({
 			appendTo: $('body'),
 			autoOpen: true,
 			closeOnEscape: true,
			dialogClass: 'popUpDialog',
 			height: 300,
 			width: 400,
 			modal: true,
 			title: "Edit Anime",
			close: function() {
				YAL.removeDialogViews();
				Backbone.history.navigate("#", {trigger: true});
			}
 		});
		Backbone.history.navigate("listItem/" + itemId + "/edit", {trigger: true});
	},

	askToChangeStatus: function(status, item) {
		console.log("asking to complete");
		var dialog = $(this.status_change_template({item: item, status: status}));
		dialog.dialog({
			appendTo: $('body'),
			autoOpen: true,
			closeOnEscape: true,
			dialogClass: 'popUpDialog noTitle',
			modal: true,
			buttons: [{
				text: "Yes",
				click: function() {
					item.save({status: status}, {
						error: function(model, resp) {
							console.log(resp.responseJSON);
						}
					});
					dialog.dialog("close");
				}
			},
			{
				text: "No",
				click: function() {
					$(this).dialog("close");
				}
			}]
		});
	},
});