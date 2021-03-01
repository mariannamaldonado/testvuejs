const express = require('express')
const app = express()
const rtMain= require('./routers/rtMain')

// //middlewares
// app.use(express.json())

app.get('/api/welcome',(req, res)=>{
       res.json({
           saludo:'hola mundo'
       })
     })

app.post('/api/nuevo', (req,res)=>{
    let datos=req.body  // capturo la respuesta
    console.log("esto llega desde el cliente", datos) //muestro datos 
    res.json({
        respuesta:'Datos recibidos'

    })
})

app.listen(8082, (err)=>{
    if(err) console.log("Errores", err)
    console.log("server run on port 8082")
})