var db = require("../conexion/conexion");


exports.crear = (req, res)=>{
  var nombre = req.body.nombre;
  var imagen = req.body.imagen;
  var descripcion = req.body.descripcion;
  var franquicia = req.body.franquicia;
  db.query('INSERT INTO ilustraciones (nombre,imagen,descripcion,franquicia) VALUES (?,?,?,?)',
  [nombre,imagen,descripcion,franquicia],
  (error, resultado)=>{
      if(error){
          console.log(error);
      }
      else{
        res.redirect('/administrar');
      }
  });
}



exports.editar = (req, res)=>{
    var id= req.body.id;
    var nombre = req.body.nombre;
    var imagen = req.body.imagen;
    var descripcion = req.body.descripcion;
    var franquicia = req.body.franquicia;
    db.query('UPDATE ilustraciones SET ? WHERE id = ?',
    [{nombre:nombre,imagen:imagen,descripcion:descripcion,franquicia:franquicia},id],
    (error,resultado)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/administrar')
        }
    });
}





///////////////////////////////////


exports.login= (req, res) => {
    var correo = req.body.correo;
    var contrasena = req.body.contrasena;
    if (correo === 'email@admin.com' && contrasena === 'password') {
      res.redirect('/inicio');
    } else {
      res.redirect('/');
    }
  };




