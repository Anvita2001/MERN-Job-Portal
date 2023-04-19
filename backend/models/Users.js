const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

// Create Schema
const UserSchema = new Schema({
	Name: {
		type: String,
		//required: true
	},
	Email: {
		type:String,
		unique:true,
		//required:true
		//required: true
	},
	Password:{
		type:String,
		//required:true
	},
	Institution1_name:{
		type:String,
		//required:true,
		trim:true
	},
	Start_year1:{
		type:Number,
		//required:true
	},
	End_year1:{
		type:Number,
		//required:false
	},
	Institution2_name:{
		type:String,
				//required:false,

		//required:true,
		trim:true
	},
	Start_year2:{
		type:Number,
				//required:false

		//required:true
	},
	End_year2:{
		type:Number,
		//required:false
	},
		Institution3_name:{
		type:String,
				//required:false,

		//required:true,
		trim:true
	},
	Start_year3:{
		type:Number,
				//required:false

		//required:true
	},
	End_year3:{
		type:Number,
		//required:false
	},

	Skills:{
		type:String,
		//enum:['Python','Java','C','C++','Ruby','others'],
		trim:true
	}/*
	Rating:{
		type:Number,
		//required:false,
		default:0
	}*/
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.Password, function(err, isMatch) {
       // if (err) return cb(err);
        cb(null, isMatch);
    });
};
module.exports = User = mongoose.model("Users", UserSchema);
