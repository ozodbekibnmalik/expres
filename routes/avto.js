const express = require('express')
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("Avtomobil qidirilmoqda")
})
router.get("/:id",(req,res)=>{
    res.send("Avtomobil qidirilmoqda")
})
