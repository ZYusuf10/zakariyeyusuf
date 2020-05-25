var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema(
    {
        name: {type: String, required: true, max: 100},
        message: {type: String, required: true, max: 500},
        email: {type: String, required: true, max: 100},
        time: {type: Date, default: Date.now},
    }
);

//virtual url
ContactSchema.virtual('url').get(
    function(){
        return '/contact/'+this._id;
    }
);

module.exports = mongoose.model('Contact', ContactSchema);