'use strict';

var express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express();

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/public/index.html');
});


app.post('/api/fileanalyse/', upload.single('file'), function (req, res, next) {
        res.json({filesize: req.file.size});
    }
);


var port = process.env.PORT || 8080;

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});