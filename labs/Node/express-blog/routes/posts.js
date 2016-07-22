var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts_controller');

router.route('/')
  .get(postsController.index)
  .post(postsController.create);

router.route('/new/')
  .get(postsController.new);

router.route('/:id')
  .get(postsController.show)
  .patch(postsController.update)
  .delete(postsController.destroy);

router.route('/:id/edit')
  .get(postsController.edit);

// router.get('/', function(req,res){
//   res.send('<h1> Posts Index </h1><p> </p>');
// });

router.get('/', postsController.index);

// router.get('/new', function(req,res){
//   res.send('<h1>/posts/new</h1><p> </p>');
// });

router.get('/new', postsController.new);

// router.post('/', function(req,res){
//   res.send('Create');
// });

router.get('/', postsController.create);

// router.get('/:id', function(req,res){
//   console.log(req.params);
//   res.send('<h1> Posts id: '+req.params.id + '</h1>');
// });

router.get('/:id', postsController.show);


// router.get('/:id/edit', function(req,res){
//   res.send('<h1>EDIT</h1><p> </p>');
// });

router.get('/:id/edit', postsController.edit);

// router.get('/:id', function(req,res){
//   res.send('<h1>Update </h1><p> </p>');
// });
router.get('/:id', postsController.update);

//destroy path method

router.get('/:id', postsController.destroy);


module.exports = router;
