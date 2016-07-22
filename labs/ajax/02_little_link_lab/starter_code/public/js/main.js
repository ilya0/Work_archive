//this is front end

// //this is the intital methodolgy for ajax
// $.ajax({ /// this is the ajax that sends the data
//   url: '/api/test', //this is the route
//   method: 'GET', // this is the type of request
//   data:{message:"POSTing body data with request."},
//   success: function(data){ // this is what gets run when the server responds
//   console.log(data); //console logs the data input
//   }
// });


var givemedata ={};// this is a test variable



$(document).ready(function(){




  $("#submitbutton").click(function(){ //on linkbutton click do this function (this jquery)
        var textboxinfo = $('#inputbox').val(); //set the text boxinfo var value to the input box value

    $(".ulclass").append("<li>" +textboxinfo.url+ "</li>");


    console.log('button was pressed and done through jquery');

    $.ajax({ //ajax request
      method: "POST", //post
      url: "/api", //api url
      data: {text: textboxinfo}, //data is textboxinfo var but it needs to be in object format for the ajax data
      error: function( response ){ //if error do this
        console.log("There was a problemmo.");
      }
    })
  .done(function( textboxinfo ){ //on done do this function
    console.log(textboxinfo); // console log var textboxinfo
   alert( "Data Saved: " + textboxinfo ); //alert textbox var
  });



  });

$('body').on('click', '#items li', function(){
  console.log($(this).text());
});


});



