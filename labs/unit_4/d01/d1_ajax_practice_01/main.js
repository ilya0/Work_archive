//'http://www.omdbapi.com/?s=captain%20america'


// $.ajax({
//   url: "http://www.omdbapi.com/?s=captain%20america",
//   success:function(data){

// var movies = data.Search.filter(function(data){
//   return (data.Type ==='movie' && parseInt(data.Year)>=2010);
// });
// console.log(movies);
//   }
// });


$.ajax({
  url: 'http://www.omdbapi.com/?s=captain%20america',
  success:function(data){

    var movies = data.Search;
    var filtered =[];

for (var i=0; i<movies.length; i++){


 console.log(movie[i]);
  var movie = movie[i];

  console.log(movie[i]);

  if(movie.Type === 'movie' && parseInt(movie.Year) > 2010){
    filtered.push(movie);
    $('#tb').append('<tr><td><img src="' + movie.Poster +'"></td><td>' +movie.Title + '</td></tr>');
  }
}

console.log(filtered);

}
});


$('button').on('click', function(){
  console.log($('search').val());

});










