object @list_item
attributes :comment, :episodes_seen, :status, :rating, :progress, :id, :anime_id

glue @list_item.anime do
  attributes :title, :episode_count
  attribute :show_type => :type
end
