YAL.Views.ListShow = Backbone.View.extend({
  ESC: 27,

  template: JST['list/show'],

  initialize: function(list) {
    this.list = list;
    this.editProgress = false;
    this.editRating = false;
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
    "click .headComment" : "commentSort"
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
    var itemId = $form.data("itemid");
    var item = this.list.get("items").get(itemId);
    item.save($form.serializeJSON(), {
      success: function() {
        callback();
        that.render();
      },
      error: function(model, resp) {
        console.log(resp.responseJSON);
        callback();
        that.render();
      }
    });
  },

  editLinkClick: function(event, focusTarget, callback){
    event.preventDefault();
    this.removeFocus(event);
    event.stopPropagation();
    var itemId = $(event.currentTarget).data("itemid");
    callback(itemId);
    this.render();
    $(focusTarget).focus();
    this.setRemoveFocusEvent();
  },

  sortEvent: function(event, sortTarget){
    console.log("sorting by " + sortTarget);
    event.preventDefault();
    var listItems = this.list.get("items");
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
    event.preventDefault();
    var listItems = this.list.get("items");
    listItems.sortKey = "episode_count";
    listItems.sort();
    listItems.sortKey = "progress";
    listItems.sort();
    this.render();
  },

  commentSort: function(event) {
    this.sortEvent(event, "comment");
  }

})