var mongoose = require('mongoose');
var shortid = require('shortid');

var linkSchema = new mongoose.Schema({
  url       : String,
  shortLink : {type:String, default: shortid.generate},
  title     : String,
  note      : String,
  public    : { type: Boolean, default: true },
  clicks    : { type: Number, default: 0 },
});


console.log(shortid.generate()); // test for short id generation

linkSchema.methods.trackClick = function() {
  this.trackClick++;
  this.save(cb);
};




var Link = mongoose.model('Link', linkSchema);

module.exports = Link;
