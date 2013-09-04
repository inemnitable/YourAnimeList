object @list_item
attributes :comment, :episodes_seen, :status, :rating, :progress, :id
node :title do
  @list_item.anime.title
end
node :type do
  @list_item.anime.show_type
end
node :episode_count do
  @list_item.anime.episode_count
end
