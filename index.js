const express = require('express');
require("dotenv").config();


//Crear el servidor de express
const app = express();




//Directorio Publico

app.use(express.static('public'));


//Lectura y parseo del body
app.use(express.json());


//rutas
app.use('/api/auth', require("./routes/auth"));
//TODO: Crud: eventos 





//escuchar peticiones
app.listen(process.env.PORT,() => { 
console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});


