var mongoose = require('mongoose');

var unitschema = new mongoose.Schema({

    _id:{ type:mongoose.Schema.Types.ObjectId},
    name:{ type:String,required:true,unique:true},
    description:{ type:String,required:true},
    
});

module.exports = mongoose.model('unit',unitschema);