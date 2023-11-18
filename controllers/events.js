const {response} = require("express")

const getEventos = (req, res)=>{
res.json({
ok: true ,
msg: "getEventos",
    })
}
const crearEventos = (req, res)=>{
    res.json({
    ok: true ,
    msg: "crearEventos",
        })
    }
    const actualizarEvento = (req, res)=>{
        res.json({
        ok: true ,
        msg: "actualizarEvento",
            
            })
        }
        const eliminarEvento = (req, res)=>{
            res.json({
            ok: true ,
            msg: "eliminarEvento",
                })
            }
    
module.exports = {getEventos,crearEventos,
    actualizarEvento,eliminarEvento
}