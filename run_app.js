var express = require('express'),
	multer  = require('multer'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	path = require('path'),
	config = require('./app/config/config_path'),
	app = express(),
	swig = require('swig');


PORT  = process.env.PORT || 3000;


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.set('views', __dirname+config.dir_views);


app.use(express.static(config.dir_public));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('/',function(req,res){
	res.render('index/index');
})

app.listen(PORT,function(){
	console.log("Server Runnig In Port: "+ PORT);
});




