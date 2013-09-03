class Anime < ActiveRecord::Base
  TYPES = ["TV", "OVA", "Movie", "Special"]
  attr_accessible :episode_count, :title, :show_type

  validates_presence_of :title, :show_type
  validates_inclusion_of :show_type, in: TYPES
  validates_numericality_of :episode_count,
                            allow_nil: true,
                            greater_than_or_equal_to: 0,
                            only_integer: true

  has_many :listings, class_name: "ListItem"

end
