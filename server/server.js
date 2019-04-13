const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const request = require('request');
var rp = require('request-promise');
// const routes = require('./router.js');

const app = express();
const port = 3000;

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist')));

app.all('/api/*', (req,res) => {
    var pathArr = req.path.split('/');
    if(pathArr[2] === 'reviews'){
        res.redirect('http://localhost:3002' + req.path);
    } else if(pathArr[2] === 'images') {
        res.redirect('http://localhost:1143' + req.path);
    } else if(pathArr[2] === 'gallery') {
        res.redirect('http://localhost:3005' + req.path);
    } else {
        res.redirect('http://localhost:3001' + req.path);
    }
})


app.listen(port, () => `Listening for connections on port ${port}`);