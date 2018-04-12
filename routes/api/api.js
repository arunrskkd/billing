var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Stock = require('../models/stock');
var Unit = require('../models/unit');
var Bill = require('../models/billingdata');

router.get('/viewstock', function (req, res, next) {
    Stock.find().exec().then((data) => { res.json(data) }).catch((err) => { res.send(err) });
});


router.get('/viewunit', function (req, res, next) {
    Unit.find().exec().then((data) => { res.json(data) }).catch((err) => { res.send(err) });
});


router.post('/add', function (req, res) {
 
    var stock = new Stock({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        quantity:req.body.quantity,
        price:req.body.price,
        description:req.body.description,
        unit:req.body.unit
      });

      stock.save((err,data) => { 
           
        try {
            
                if (err) {
                throw (err);
                }
                res.send("sucess news" + req.body.name) ;
            
            } catch (err) {
            res.sendStatus(500);
            }
         
    });

});

router.post('/addunit', function (req, res) {
 
    var unit = new Unit({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        description:req.body.description,
    
      });

      unit.save((err,data) => { 
           
        try {
            
                if (err) {
                throw (err);
                }
                res.send("sucess news" + req.body.name) ;
            
            } catch (err) {
            res.sendStatus(500);
            }
         
    });

});

router.post('/updatestock', function (req, res) {
  var upsertData ={
    name:req.body.name,
    quantity:req.body.quantity,
    price:req.body.price,
    description:req.body.description,
    unit:req.body.unit
  }  

  Stock.update({ _id: req.body.id }, upsertData, { multi: false }, function(err) {
    if(err) { throw err; }
    res.send("sucess");
});
  

});

router.post('/updateunit', function (req, res) {

    var upsertData ={
      name:req.body.name,
      description:req.body.description,
    }  
   
    Unit.update({ _id: req.body.id }, upsertData, { multi: false }, function(err) {
      if(err) { throw err; }
      res.send("sucess");
  });
    
  
  });

router.get('/deletestock/:id', function (req, res) {
   
   
    Stock.findOneAndRemove({_id: req.params.id}, function(err){
        if(err) { throw err;}
        res.send("sucess");
    })
    
});

router.get('/deleteunit/:id', function (req, res) {
     
    Unit.findOneAndRemove({_id: req.params.id}, function(err){
        if(err) { throw err;}
        res.send("sucess");
    })
    
});


router.post('/billing', function (req, res) {

    var bill = new Bill({
        _id: new mongoose.Types.ObjectId(),
        modified:Date.now(),
        items: req.body,
     
      });

      bill.save((err,data) => { 
           
        try {
            
                if (err) {
                throw (err);
                }
              
            
            } catch (err) {
            res.sendStatus(500);
            }
         
    });


    for(var key in req.body){
        console.log(req.body[key].name);
        Stock.update({name: req.body[key].name}, {$inc: {'quantity': -req.body[key].quantity}},function(err){
            if(err) { throw err;}
            
        });
    }
  
    res.send("sucess");
});



module.exports = router;