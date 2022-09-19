const express = require("express");
const router = express.Router();

const users = [
  { name: "Tom", age: 12, id: 1 },
  { name: "Mark", age: 44, id: 2 },
  { name: "Lola", age: 78, id: 3 },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  const user = users.find((val) => val.id === +req.params.id);
  res.send(user);
});

router.post("/add", (req, res) => {

  const user = {
    id: users.length + 1,
    name:req.body.name,
    age:req.body.age
  };

  users.push(user)
  res.send(users)
});

router.put("/uptede/:id",(req,res)=>{
    const idx = users.findIndex(val => val.id == +req.params.id)
    if(idx != -1){
        req.body.name = req.body.name,
        req.body.age = parseInt(req.body.age),
        req.body.id = parseInt(req.params.id)
        users[idx] = req.body
        res.send(users)
    }
})

router.delete("/edit/:id",(req,res)=>{
    const idx = users.findIndex(val => val.id == +req.params.id)
    if(idx != -1){
        users.splice(idx,1),
        res.send(users)
    } else{
        res.send("Unday id yo'q")
    }
})

module.exports = router;
