var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


function calcAge(birthday) {
	var year, month, day, age, year_diff, month_diff, day_diff;    
	var myBirthday = new Date();    
	var today = new Date();    
	var array = birthday.split("-");
    year = array[0];    
    month = array[1];    
    day = array[2];
    
    year_diff = today.getFullYear() - year;    
    month_diff = (today.getMonth() + 1) - month;    
    day_diff = today.getDate() - day;
    if (month_diff < 0){ 
    	year_diff--;
    } else if ((month_diff === 0) && (day_diff < 0)) {
        year_diff--;
    }    

    return year_diff;
}

var PersonSchema = new Schema({
    
    first_name: {type: String, lowercase: true},
    last_name: {type: String, lowercase: true},
    user : {
    	username:{
    		type: String,
    		unique: true,	
    	},
    	password: String,
    	email : {
    		type: String,
    		unique: true,
    	},
    },
    date_birth: Date,

    sexo: {
    	type: String,
    	enum:["M","F"],
    },

    created: {
    	type: Date, 
    	default: Date.now
    }
});

PersonSchema.methods.get_full_name = function(){
	return this.first_name+" "+this.last_name;
};

PersonSchema.methods.get_age = function(){
	//Warning
	return this.date_birth;
};


module.exports = mongoose.model('Person', PersonSchema);