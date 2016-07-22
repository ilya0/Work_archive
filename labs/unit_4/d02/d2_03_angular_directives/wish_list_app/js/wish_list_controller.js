angular
  .module('WishListApp')
  .controller('WishListController', WishListController);

function WishListController() {
  var self = this;

  self.list = [

    {name: 'pony',  isGranted: false, imageUrl: 'http://www.coldstonecreamery.com/assets/img/products/signaturecakes/signature-cakes-strawberrypassion.jpg'},
   {name: 'pony',  isGranted: false, imageUrl: 'http://www.slate.com/content/dam/slate/blogs/lexicon_valley/2014/02/13/doge_why_we_can_t_agree_on_how_to_pronounce_the_internet_meme_featuring/doge_twinkie.jpg.CROP.promovar-mediumlarge.jpg'}
  ];

  self.make = make;
  self.add = add;
  self.deletedat = deletedat;

  function add(){
    var wish = self.wish
    wish.isGranted = false;
    self.list.push(wish)
    console.log('add a wish');


  }

  function make(wish) {
    wish.isGranted = true;
    console.log(wish, "is granted");
  }


  function deletedat(wish){
    console.log("delete button prasssed yo");
    var index = self.list.indexOf(wish);
    self.list.splice(index,1);
  }



}


