/* Event Routes
/api/events */

//Todas tienen que pasar por la validacion del JWT
//Obtener eventos
const{Router} = require('express');
const {validarJWT} = require("../middlewares/validar-jwt")
const router = Router();

router.get("/",validarJWT,getEventos);
const token =  await generarJWT(usuario.id, usuario.nombre);


//Crear un nuevo evento

router.post("/",validarJWT,crearEvento);

//Actualizar evento

router.put("/:id",validarJWT,actualizarEvento);

//Borrar evento

router.delete("/:id",validarJWT,eliminarEvento);


module.exports = router;