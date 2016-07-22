// $('.btn').on('click',function(){
// console.log('clicked the button');

// if($('.btn').html("way")){
//   $('.btn').html("No Way");

//   }else if($('.btn').html("No Way")){

//     $('.btn').html("way");
//   }else{
//     console.log("hit else");
//   }

// });




   $(".btn").click(function () {
      $(this).text(function(i, text){
          return text === "Way" ? "NO Way" : "Way";
      });
   });


$('.name').click(function(i,text){
             $(this).addClass("hidden");
            $(".input-name").removeClass("hidden");
            $(".input-name").attr("placeholder", "Wayne");

  console.log("wanye clicked");
});

$(".input-name").keypress(function(event){
    if(event.which == '13'){
        alert('You pressed a "enter" key in somewhere');

console.log("enter pressed");
$(".name").text($(".input-name").val()); //change .name span to input box val
$(".input-name").addClass("hidden");  // hide input box
$(".name").removeClass("hidden");  //remove the hidden class from name


    }
});

var counter = 2;
$(".extreme-closeup").click(function(){
  console.log("closeup clicked");
  console.log("counter" +counter);
  if(counter%2===0){
    counter++;
$(".extreme-closeup").css({transform: 'scale(2)'});
}else{
  counter++;
  $(".extreme-closeup").css({transform: 'scale(1)'});
}
});


$(".input-phrase").keypress(function(event){
    if(event.which == '13'){
        alert('You pressed a "enter" key in somewhere');


  $(".input-phrase").val()

}
});


