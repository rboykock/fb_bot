"use strict";


var express=require('express')
var mime_type = require('./lib/mime_type')

var port=process.env.PORT || 30000;

var app=express();

app.get('/',function(req,res){
    res.type(mime_type.APPLICATION_TYPE_TEXT);
    res.send('Hello world !!!')
});

app.use(function(req,res){
    res.type(mime_type.APPLICATION_TYPE_TEXT);
    res.status(404);
    res.send('404 - Not found')
});

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.type(mime_type.APPLICATION_TYPE_TEXT);
    res.status(500);
    res.send('500 - Server error');
});

app.listen(port,function(){
    console.log('Server run on http://127.0.0.1:'+port);
});