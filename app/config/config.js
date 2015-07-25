
module.exports = {
	'DIR':{
		'VIEWS': '/app/views',
		'PUBLIC': 'public',
	},
	'DB':{
		'PROTO':'mongodb',
		'HOST': 'localhost',
		'PORT': '27017',
		'USER': 'root',
		'PASSWORD': '123456',
		'DB_NAME': 'codeandojs',

		'URI': function(){
			return this.PROTO+'://'+this.USER+':'+this.PASSWORD+'@'+this.HOST+':'+this.PORT+'/'+this.DB_NAME;
		}
	}
};