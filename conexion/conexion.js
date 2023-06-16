
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'portafolio'
});

connection.connect(
    (err)=>{
        if(!err){
            console.log('Conexion establecida');
        }else{
            console.log('Conexion fallida');
        }

    }
);

module.exports=connection;

//connection.query("SELECT * FROM productos", function(err, resultado){
//    console.log(resultado);
//});

//connection.end();

