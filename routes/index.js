var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");
var administrarRouter = require('./administrar');



/* GET home page. */
router.get('/inicio', function(req, res, next) {

  res.render('inicio', { title: ' P O R T F O L I O' });
});
/* GET nosotros page. */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'ABOUT IT' });
});


/* GET registrar page. */
router.get('/registrar', function(req, res, next) {
  res.render('registrar', { title: 'UPLOAD' });
});


/* GET edit page. */
router.get('/registrar', function(req, res, next) {

  db.query("SELECT * FROM ilustraciones", function(err, resultado){
          console.log(resultado);
          res.render('registrar', { title: 'EDIT',ilustraciones:resultado });
      });});




router.use('/administrar', administrarRouter);


//////////////////////////////

const registrar = require('./registrar');
router.post('/crear', registrar.crear);
router.post('/editar', registrar.editar);
router.post('/login', registrar.login);



router.get('/borrar/:id', (req, res)=>{
  db.query('DELETE FROM ilustraciones WHERE id = ?', [req.params.id],
  function(error, resultado){
    if(error){
      console.log(error);
    }
    else{
        res.redirect('/administrar');
    }
  });
});



router.get('/editar/:id', (req, res)=>{
  db.query('SELECT * FROM ilustraciones WHERE id = ?',[req.params.id],function(err,resultado){
    console.log(resultado);
    res.render('editar', { title: 'EDIT',ilustraciones:resultado[0] });
  })
});



////////////////////////////////////////////////////////////////
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LOGIN' });
});


// router.post('/login', (req, res) => {
//   const { email, password }login = req.body;

//   if (email === 'email@admin.com' && password === 'password') {
//     res.redirect('/');
//   } else {
//     res.redirect('/login');
//   }
// });

//////////////////////////////////////////////////////////////






module.exports = router;
