var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");
var registrar=require('./registrar');


/* GET administrar page. */
router.get('/', function(req, res, next) {

    db.query("SELECT * FROM ilustraciones", function(err, resultado){
            console.log(resultado);
            res.render('administrar', { title: 'ADMINISTRATE',ilustraciones:resultado });
        });


    
  });

  
module.exports = router;
