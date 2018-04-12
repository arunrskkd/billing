var mongoose = require('mongoose');


var billingschema = new mongoose.Schema({
    
    _id:{ type:mongoose.Schema.Types.ObjectId},
    modified:{type:Date},
    items:[{
        name:{ type:String,required:true},
        quantity:{ type:Number,required:true},
        total:{ type:Number,required:true},
    }
],
  
   
});

module.exports = mongoose.model('bill',billingschema);