var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TechnicalPostSchema = new Schema(
  {
    Record: {type: Object, blackbox: true }
  }
);

//virtual url
TechnicalPostSchema.virtual('url').get(
  function(){
    return '/Technical/'+this._id;
  }
);

module.exports = mongoose.model('TechnicalPost', TechnicalPostSchema);