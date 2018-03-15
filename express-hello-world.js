const express = require('express')
const app  = express();
const port = process.env.PORT || 8080
let time = new Date();

app.get('/',(req,res)=>{
    res.send('Hello World!')   
})

app.get('/time',(req,res)=>{
    res.send(time.toISOString())
})

app.listen(port)