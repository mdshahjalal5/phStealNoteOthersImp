const express = require('express');
const app = express();
const cors = require("cors");
const port = 15000;

app.use(cors());

const phones = require('./phones.json');





// ** home api
app.get('/', (req,res)=> res.send('Home data changed yeeee'));

// ** phones api

app.get('/phones',(req,res)=> res.send(phones))


// ** individual phones api 

app.get('/phones/:id',(req,res)=>{
    const id = +(req.params.id);
    const phone = phones.find(ph => ph.id === id) || {};
    res.send(phone);

})



// ** app listen in the terminal in the specified port

app.listen(port,()=> console.log(`app running on port: ${port}`))

