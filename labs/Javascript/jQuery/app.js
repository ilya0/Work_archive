// var divToManipulate = document.getElementbyId('divtochange');
// divToManipulate.innerHTML = 'Goodbyeyo';

//^^^ old way

//code   $('#myDiv').html('Goodbyeyo');

//New jQuery way ^^^

//code var myDiv = document.getElementById('container');
//code var newP = document.createElement('p');

//code newP.innerHTML = 'Hellocomplicated, multistep world of adding an element to the dom';
//code myDiv.appendChild(newP);

// old way ^^


// $('#container').append('<p>');  // appehends the p tag (adds)
// $('p').html('hello siple jq');  // puts text in the p tag
// //add red class to p tag
// $('p').addClass('red');


// //removes the bold through dom
// $('bold'). removeClass('bold');

// var $newP = $('<p>');

// //creating a new ptag
// $newP.html('this is another ptag!');
// //editing the html content to the text

// $newP.addClass('red');

// //adding a new class to new ptag
// $('#myDiv').append($newP)



//////////////////////

$( document ).ready(function(){}



    $('#container').append('<p>');  // appehends the p tag (adds)
    $('p').html('hello siple jq');

    $('#myBtn').on('click',function(){
      console.log('yo licked me');
      $('p').toggleClass('red');
    });



    $('#secondBtn').on('click', function(){
     //event.stopPropagation();
     console.log('you clicked me');
    });

    $('#container').on('click', function(){

     console.log('Yes, sir!');

    });

    var containerInnerHtml = $('#container').html();

    console.log(containerInnerHtml);

    $('#container').html('<img src="https://pbs.twimg.com/profile_images/3356422133/e5e9271c7b7ac02abc6c6de59c8d85e3.png">');

    console.log($('#container').html);

    $('#secondBtn').remove();


    ///////////////////////////



    $('#addDrink').on('click',function(){
      var newDrink = $('#drinkInput').val();
      $('#drinks').append('<li>' +newDrink + '</li>');
    $('#drinkInput').val('');
    }


    $('#addFood').on('click',function(){
      var newFood = $('#foodInput').val();
      $('#food').append('<li>' +newFood + '</li>');
    $('#foodInput').val('');

    }


});

