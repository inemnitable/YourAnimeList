collection @list_items => :items
attributes :comment, :episodes_seen, :status, :rating, :progress
node :title do |item|
  item.anime.title
end
node :type do |item|
  item.anime.show_type
end
node :episode_count do |item|
  item.anime.episode_count
end