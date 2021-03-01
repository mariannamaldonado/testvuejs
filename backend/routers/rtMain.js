const express = require('express')
const daoUsers = require('../dao/daoUsers')
const rtMain = express.Router()
const Usuario = require('../models/Usuario')


rtMain.get('/welcome', (req, res)=>{
    res.json({
        respuesta:'ok'
    })
})

rtMain.post('/guardar',(req,res)=>{
    console.log(req.body)
    daoUsers.guardar(req.body)
    res.json({
        respuesta:'ok'
    })
})

rtMain.get('/lang/:language', (req,res)=>{
    let lang=req.params.language
    console.log(lang)
    false.readFile(`./locales/${lang}.json`,`utt8`,(err,data)=>{
        res.json(JSON.parse(data))
    })
})

module.exports= rtMain