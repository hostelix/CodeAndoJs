var express = require('express'),
	multer  = require('multer'),
	mongoose = require('mongoose'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	path = require('path'),
	config = require('./app/config/config'),
	app = express(),
	swig = require('swig'),
	passport =  require('passport'),
	urls = require('./app/urls'),
	Persona = require('./app/models/person'),
	expressSession = require('express-session');

PORT  = process.env.PORT || 3000;

//Coneccet to mongoDB
var db = mongoose.connection;
	
db.on('error', function(err){
	console.error('Failure to connect-> '+err);
	process.exit(1);
});

db.once('open', function() {
  	console.info('Connected to database success');
});

mongoose.connect(config.DB.URI());

//set params to swing 
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('view cache', false);
swig.setDefaults({ cache: false });

//set path to views
app.set('views', __dirname+config.DIR.VIEWS);


//set path to public files
app.use(express.static(config.DIR.PUBLIC));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(expressSession({
	secret: "mycodsecrect",
	resave: true,
 	saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

//set morgan to log request
app.use(morgan('dev'));

app.get('/', function(req, res){
	res.render('index/index');
});


app.use('/auth',urls.auth);


/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error/errors', {
        message: {
        	'message':err.message,
        	'status': err.status,
        },
        error: {}
    });
});

*/



app.listen(PORT,function(){
	console.log("Server runnig in port: "+ PORT);
});




