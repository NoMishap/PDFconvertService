var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');
var path = require('path');
var cfenv = require('cfenv');
//var pdftotext= require('./extractPdf');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
//app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();


function convert(write)
{
    
    var pdfText = require('pdf-text')
    var pathToPdf ="./ciao.pdf"
    pdfText(pathToPdf, function(err, chunks) {
    chunks.map((str)=>write.send(str))
    write.end();
    })

}

app.get('/', function (request, response) {
    
    response.status(200);
    convert(response);
  
});


app.listen("8080");
console.log("server in esecuzione alla porta: 8080");
