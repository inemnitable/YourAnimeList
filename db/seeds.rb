# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.new(username: "kurisu", password: "okabe", email: "kurisu@fgl.com")
user.reset_session_token
user.save!
animes = Anime.create!([
  {title: "Steins;Gate", episode_count: 25, show_type: "TV"},
  {title: "Honey & Clover", episode_count: 24, show_type: "TV"},
  {title: "Neon Genesis Evangelion", episode_count: 26, show_type: "TV"},
  {title: "Neon Genesis Evangelion: The End of Evangelion", episode_count: 1, show_type: "Movie"},
  {title: "Evangelion 1.0: You Are (Not) Alone", episode_count: 1, show_type: "Movie"},
  {title: "Evangelion 2.0: You Can (Not) Advance", episode_count: 1, show_type: "Movie"},
  {title: "Evangelion 3.0: You Can (Not) Redo", episode_count: 1, show_type: "Movie"},
  {title: "Gankutsuou: The Count of Monte Cristo", episode_count: 26, show_type: "TV"},
  {title: "Trapeze", episode_count: 11, show_type: "TV"},
  {title: "Time of Eve", episode_count: 6, show_type: "ONA"},
  {title: "Infinite Stratos", episode_count: 12, show_type: "TV"},
  {title: "Attack on Titan", episode_count: 26, show_type: "TV"},
  {title: "Serial Experiments Lain", episode_count: 13, show_type: "TV"}
])

items = ListItem.create!([
  {user_id: 1, anime_id: 1, status: "Completed", rating: 10},
  {user_id: 1, anime_id: 2, status: "Completed", rating: 10},
  {user_id: 1, anime_id: 3, status: "Completed", rating: 9},
  {user_id: 1, anime_id: 4, status: "Completed", rating: 9},
  {user_id: 1, anime_id: 5, status: "Plan to Watch"},
  {user_id: 1, anime_id: 6, status: "Plan to Watch"},
  {user_id: 1, anime_id: 7, status: "Plan to Watch"},
  {user_id: 1, anime_id: 8, status: "Completed", rating: 10},
  {user_id: 1, anime_id: 9, status: "Watching", progress: 2, rating: 8},
  {user_id: 1, anime_id: 10, status: "On Hold", progress: 3, rating: 8},
  {user_id: 1, anime_id: 11, status: "Dropped", progress: 10, rating: 4},
  {user_id: 1, anime_id: 12, status: "Watching", progress: 15, rating: 7},
  {user_id: 1, anime_id: 13, status: "Completed", rating: 3}
])