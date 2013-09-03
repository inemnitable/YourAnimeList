class Anime < ActiveRecord::Base
  TYPES = ["TV", "OVA", "Movie", "Special"]
  attr_accessible :episode_count, :title, :show_type

  validates_presence_of :title, :show_type
  validates_inclusion_of :type, in: TYPES

  has_many :listings, class_name: "ListItem"

end
