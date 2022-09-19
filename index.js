const express = require('express')
const app = express()
const usersRouter = require("./routes/users")
const phonesRouter = require('./routes/phoneUSE')
const avtoRouter = require("./routes/avto")

app.use(express.urlencoded({express:true}))
app.use(express.json())
app.use("/users",usersRouter)
app.use("/phones",phonesRouter)
app.use("/avto",avtoRouter)


app.get('/',(req, res)=>{
    res.send("Hello world")
})




const port = 5000
app.listen(port,()=>{
    console.log("Server Working on port", port)
})