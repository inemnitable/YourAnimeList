YAL.Collections.ListItems = Backbone.Collection.extend({
  model: YAL.Models.ListItem,

  sortKey: "title",
  sortOrder: 1,

  comparator: function(item1, item2) {
    var val1 = item1.get(this.sortKey);
    var val2 = item2.get(this.sortKey);
    if (this.sortKey === "progress" && (val1 == null || val2 == null)) {
      var status1 = item1.get("status");
      var status2 = item2.get("status");
      if (status1 === "Completed" && status2 === "Completed") {
        var count1 = item1.get("episode_count");
        var count2 = item2.get("episode_count");
        if (count1 < count2) return -1*this.sortOrder
        else if (count1 > count2) return this.sortOrder;
      }
    }
    if (val1 < val2) return -1*this.sortOrder
    else if (val1 > val2) return this.sortOrder
    else {
      var title1 = item1.get("title");
      var title2 = item2.get("title");
      if (title1 < title2) return -1
      else if (title1 > title2) return 1
      else return 0;
    }
  }
});