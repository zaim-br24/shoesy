require('dotenv')
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')


app.get('/', (req , res)=>{
    res.render('home');
})

app.get('/home/:pathID', (req , res)=> {
    res.send(req.params.pathID)

})

const port = 8080;
app.listen(port, ()=> console.log(`server running on port ${port}`))