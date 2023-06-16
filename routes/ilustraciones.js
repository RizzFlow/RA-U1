var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");


/* GET ilustraciones page. */
router.get('/', function(req, res, next) {

    db.query("SELECT * FROM ilustraciones", function(err, resultado){
            console.log(resultado);
            res.render('ilustraciones', { title: 'GALLERY',ilustraciones:resultado });
        });


    
  });





module.exports = router;




