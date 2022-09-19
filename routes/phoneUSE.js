const express = require("express")
const router = express.Router()

const phones = [
    {model:"apple",price: 2000, id: 1},
    {model:"samsung",price: 500, id: 2},
    {model:"readme",price: 300, id: 3}
]

router.get("/",(req,res)=>{
    res.send(phones)
})

router.get("/:id",(req,res)=>{
const phone = phones.find(val=>val.id === +req.params.id)
res.send(phone)
})

router.post("/add",(req,res)=>{
    const phone ={
        id:phones.length +1,
        model:req.body.model,
        price:req.body.price
    }

    phones.push(phone)
    res.send(phones)
})

router.put("/up/:id",(req,res)=>{
    const idx =phones.findIndex(val =>val.id == +req.params.id)
    if(idx != -1){
        req.body.model = req.body.model,
        req.body.price = parseInt(req.body.price),
        req.body.id = parseInt(req.params.id)

        phones[idx]= req.body
        res.send(phones)
    }

})

router.delete("/edit/:id",(req,res)=>{
    const idx = phones.findIndex(val=>val.id == +req.params.id)
if(idx != -1){
    phones.splice(idx,1),
    res.send(phones)
}else{
    res.send("unday model yoq")
}
})

module.exports = router
