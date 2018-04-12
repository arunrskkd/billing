var mongoose = require('mongoose');


var stockschema = new mongoose.Schema({

    _id:{ type:mongoose.Schema.Types.ObjectId},
    name:{ type:String,required:true,unique:true},
    quantity:{ type:Number,required:true},
    price:{ type:Number,required:true},
    description:{ type:String,required:true},
    unit:{ type:String,required:true},
});

module.exports = mongoose.model('stock',stockschema);