def gets_fav_movie
  puts  "What is your fav movie"
  fav_movie = gets.chomp
  if fav_movie == "Dodgeball"
    puts "dodgeball is correct"
    elsif fav_movie == "forgetting Sarah Marchall"
    puts "take my eyes"
  else
    puts "end of commands"
  end
end

gets_fav_movie
