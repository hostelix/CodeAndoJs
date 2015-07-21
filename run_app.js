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
	Persona = require('./app/models/person'),
	expressSession = require('express-session');

PORT  = process.env.PORT || 3000;

//Coneccet to mongoDB
var db = mongoose.connection;
	
db.on('error', function(err){
	console.log('Failure to connect-> '+err);
});

db.once('open', function() {
  console.info('Connected to database success');
});

mongoose.connect(config_db.uri_db);


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.set('views', __dirname+config_path.dir_views);


app.use(express.static(__dirname));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(expressSession({
	secret: "mycodsecrect",
	resave: true,
 	saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/',function(req,res,next){
	res.render('index/index');

	/*Persona.find().lean().exec(function(err, items) {
    	console.log(JSON.stringify(items));
	});
	next();*/
	
});

app.listen(PORT,function(){
	console.log("Server runnig in port: "+ PORT);
});




