def gets_fav_movie
  puts  "What is your fav movie"
  fav_movie = gets.chomp.downcase
  if fav_movie == "dodgeball" || "forgetting sarah marshall"
   puts "I love #{{fav_movie}}, too!"
  end
end

gets_fav_movie
