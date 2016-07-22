//needs to be reformatted to how phill did it

var listarray
$('#create').click(function(event){
  var object = [];
  event.preventDefault();


  var textboxval = $('input').val();


  localStorage.setItem(listarray,textboxval);
render();
});


var render = function(){

  $('.tasks').html("");
  for (var i = 0; i < localStorage.length; i++){
      console.log(localStorage.getItem(localStorage.key(i)));
      console.log("Input value is:" +$('input').val());
      var inputval = localStorage.getItem(localStorage.key(i));
       $('.tasks').append("<li>"+ inputval+"</li>");
  }
};
render();


function saveItems(){
  localStorage.setItem('tasks', JSON.stringify(tasks));

}

function getItems(){
    return JSON.parse(localStorage.getItem('tasks')) || []

}

