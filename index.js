const express = require("express");
const {data} = require("./data");
var cors = require('cors')

const app=express()
app.use(cors())
app.get('/data',(request,response)=>{
    console.log("api called",new Date())
    response.send(data)

})

app.listen(5000,()=>console.log('server started @ 5000'))