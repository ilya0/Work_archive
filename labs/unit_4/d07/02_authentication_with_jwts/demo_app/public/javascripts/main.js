console.log('main.js loaded');

$('#loginForm').on('submit', function(event) {
 event.preventDefault();

 var $emailInput = $('#email').val();
 var $passwordInput = $('#password').val();

 $.ajax({
 method: "POST",
 url: "/token",
 data: { email: $emailInput, password: $passwordInput }
 })
 .done(function( response ) {
   console.log( response );
   localStorage.setItem('token', response.token);
 });
});



$('#access').on('click', function(event) {

var token = localStorage.getItem('token');

 $.ajax({
 method: "GET",
 url: "/users",
 headers: {
   Authorization: "Bearer " + token
  }
 })
 .done(function( response ) {
   console.log("the access response is" + response );
 });

});
