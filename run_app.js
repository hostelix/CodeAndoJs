var express = require('express'),
	multer  = require('multer'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	path = require('path'),
	config_path = require('./app/config/config_path'),
	config_db = require('./app/config/config_db'),
	app = express(),
	swig = require('swig'),
	passport =  require('passport'),
	expressSession = require('express-session');

PORT  = process.env.PORT || 3000;

//Coneccet to mongoDB
var db = mongoose.connection;
	
db.on('error', function(err){
	console.log('Failure to connect-> '+err);
});

db.once('open', function() {
  console.info('Connected to database');
});

mongoose.connect(config_db.uri_db);


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.set('views', __dirname+config_path.dir_views);


app.use(express.static(config_path.dir_public));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(expressSession({secret: "mycodsecrect"}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/',function(req,res){
	res.render('index/index');
})



app.listen(PORT,function(){
	console.log("Server Runnig In Port: "+ PORT);
});




