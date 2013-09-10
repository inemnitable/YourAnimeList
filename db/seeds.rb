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
  {title: "Accel World", episode_count: 24, show_type: "TV"},
  {title: "Accel World EX", episode_count: 2, show_type: "OVA"},
  {title: "Afro Samurai", episode_count: 5, show_type: "TV"},
  {title: "Akira", episode_count: 1, show_type: "Movie"},
  {title: "Angel Beats", episode_count: 13, show_type: "TV"},
  {title: "Angelic Layer", episode_count: 26, show_type: "TV"},
  {title: "Baccano!", episode_count: 13, show_type: "TV"},
  {title: "Baccano! Specials", episode_count: 3, show_type: "TV"},
  {title: "Bakemonogatari", episode_count: 15, show_type: "TV"},
  {title: "Bartender", episode_count: 11, show_type: "TV"},
  {title: "Black Cat", episode_count: 23, show_type: "TV"},
  {title: "Black Lagoon", episode_count: 12, show_type: "TV"},
  {title: "Black Lagoon: The Second Barrage", episode_count: 12, show_type: "TV"},
  {title: "Black Rock Shooter (OVA)", episode_count: 1, show_type: "OVA"},
  {title: "Bleach: Memories of Nobody", episode_count: 1, show_type: "Movie"},
  {title: "Bleach: The DiamondDust Rebellion", episode_count: 1, show_type: "Movie"},
  {title: "Bleach: The Sealed Sword Frenzy", episode_count: 1, show_type: "Special"},
  {title: "Blood+", episode_count: 50, show_type: "Special"},
  {title: "Blood: The Last Vampire", episode_count: 1, show_type: "Movie"},
  {title: "Bounen no Xamdou", episode_count: 26, show_type: "ONA"},
  {title: "Byousoku 5 Centimere", episode_count: 1, show_type: "Movie"},
  {title: "Code Geass: Boukoku no Akito", episode_count: 4, show_type: "Movie"},
  {title: "Code Geass: Hangyaku no Lelouch", episode_count: 25, show_type: "TV"},
  {title: "Code Geass: Hangyaku no Lelouch R2", episode_count: 25, show_type: "TV"},
  {title: "Code Geass: Nunnally in Wonderland", episode_count: 1, show_type: "OVA"},
  {title: "Cowboy Bebop", episode_count: 26, show_type: "TV"},
  {title: "Cross Game", episode_count: 50, show_type: "TV"},
  {title: "D.N.Angel", episode_count: 26, show_type: "TV"},
  {title: "Darker than Black: Kuro no Keiyakusha", episode_count: 25, show_type: "TV"},
  {title: "Darker than Black: Kuro no Keiyakusha Special", episode_count: 1, show_type: "Special"},
  {title: "Darker than Black: Ryuusei no Gemini", episode_count: 12, show_type: "TV"},
  {title: "Death Note", episode_count: 37, show_type: "TV"},
  {title: "Durarara!!", episode_count: 24, show_type: "TV"},
  {title: "Elfen Lied", episode_count: 13, show_type: "TV"},
  {title: "Elfen Lied", episode_count: 1, show_type: "Special"},
  {title: "Ergo Proxy", episode_count: 23, show_type: "TV"},
  {title: "Escaflowne", episode_count: 26, show_type: "TV"},
  {title: "Evangelion 1.0: You Are (Not) Alone", episode_count: 1, show_type: "Movie"},
  {title: "Evangelion 2.0: You Can (Not) Advance", episode_count: 1, show_type: "Movie"},
  {title: "Evangelion 3.0: You Can (Not) Redo", episode_count: 1, show_type: "Movie"},
  {title: "Eve no Jikan", episode_count: 6, show_type: "ONA"},
  {title: "Eve no Jikan (Movie)", episode_count: 1, show_type: "Movie"},
  {title: "Fate/stay night: Unlimited Blade Works", episode_count: 1, show_type: "Movie"},
  {title: "Final Fantasy VII: Advent Children", episode_count: 1, show_type: "Movie"},
  {title: "Final Fantasy VII: Advent Children Complete", episode_count: 1, show_type: "Movie"},
  {title: "FLCL", episode_count: 6, show_type: "OVA"},
  {title: "Fruits Basket", episode_count: 26, show_type: "TV"},
  {title: "Full Metal Panic!", episode_count: 24, show_type: "TV"},
  {title: "Full Metal Panic! The Second Raid", episode_count: 13, show_type: "TV"},
  {title: "Full Metal Panic? Fumoffu", episode_count: 12, show_type: "TV"},
  {title: "Fullmetal Alchemist", episode_count: 51, show_type: "TV"},
  {title: "Fullmetal Alchemist: Brotherhood", episode_count: 64, show_type: "TV"},
  {title: "Fullmetal Alchemist: Conqueror of Shamballa", episode_count: 1, show_type: "Movie"},
  {title: "Ga-Rei: Zero", episode_count: 12, show_type: "TV"},
  {title: "Gankutsuou: The Count of Monte Cristo", episode_count: 26, show_type: "TV"},
  {title: "Gantz", episode_count: 13, show_type: "TV"},
  {title: "Gantz 2nd Stage", episode_count: 13, show_type: "TV"},
  {title: "Ghost in the Shell", episode_count: 1, show_type: "Movie"},
  {title: "Ghost in the Shell 2.0", episode_count: 1, show_type: "Movie"},
  {title: "Goshuushou-sama Ninomiya-kun", episode_count: 12, show_type: "TV"},
  {title: "Great Teacher Onizuka", episode_count: 43, show_type: "TV"},
  {title: "Hachimitsu to Clover", episode_count: 24, show_type: "TV"},
  {title: "Hachimitsu to Clover II", episode_count: 12, show_type: "TV"},
  {title: "Hachimitsu to Clover Specials", episode_count: 2, show_type: "Spcial"},
  {title: "Hataraku Maou-sama!", episode_count: 13, show_type: "TV"},
  {title: "Hayate no Gotoku! Can't Take My Eyes Off You", episode_count: }
  {title: "Steins;Gate", episode_count: 25, show_type: "TV"},

  {title: "Neon Genesis Evangelion", episode_count: 26, show_type: "TV"},
  {title: "Neon Genesis Evangelion: The End of Evangelion", episode_count: 1, show_type: "Movie"},

  {title: "Trapeze", episode_count: 11, show_type: "TV"},

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