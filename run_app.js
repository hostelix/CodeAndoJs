var express = require('express'),
	multer  = require('multer'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	path = require('path'),
	config = require('./app/config/config_path'),
	app = express();


PORT  = process.env.PORT || 3000;


app.set('views', __dirname+config.dir_views);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.listen(PORT,function(){
	console.log("Server Runnig In Port: "+ PORT);
});




