YAL.Views.ListItemSearchResults = Backbone.View.extend({
  template: JST['list_item/search_results'],

  initialize: function($el) {
    this.$el = $el;
    YAL.searchResults = YAL.searchResults || new YAL.Collections.Anime();
		this.listenTo(YAL.searchResults, "remove", this.render);
  },

  events: {
    "click a.showDetail" : "showDetail"
  },

  render: function() {

    var content = this.template({results: YAL.searchResults});
    this.$el.html(content);
    return this;
  },

  showDetail: function(event) {
    event.preventDefault();
    var id = $(event.currentTarget).data("animeid");
    YAL.detailAnime = YAL.searchResults.get(id);
		YAL.detailView.display = true;
    YAL.detailView.render();
  },
})