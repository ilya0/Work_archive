$('#go').on('click', controller);
$('.amount').on('click', sortController);
$('.action').on('click', sortbyactionController);

function params(){
  return {
    amount: parseInt( $('#amount').val() ),
    type: $('input[name=action]:checked').val()
  }
}

//model
var transactions = [];
///view
function render(){
  var $table = $('#transactions tbody');
  $table.empty();
  transactions.forEach(function( trans ){
    var row = '<tr><td>' + trans.amount + '</td><td>' + trans.type + '</td></tr>'
    $table.append( row )
  });
}
//controller
function controller(event){
  event.preventDefault();

  // get params
  var transaction = params();
  // update Model
  transactions.push( transaction );
  // update View
  render();

}

function sortController(event) {
  event.preventDefault();
  transactions.sort(function(a, b){
    return a.action > b.action;
  });
  render();
}

function sortbyactionController(event) {
  event.preventDefault();
  transactions.sort(function(a, b){
    return a.type > b.type;
  });
  render();
}
