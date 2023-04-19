const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

// Create Schema
const RecruiterSchema = new Schema({
	Name: {
		type: String,
		//required: true
	},
	Email: {
		type: String,
		//required: true
	},
	Password:{
                type:String,
        },
	Contact:{
		type:Number,
		//required:true
	},
	Bio:{
		type:String,
		//required:true,
		trim:true
	}
});
RecruiterSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.Password, function(err, isMatch) {
       // if (err) return cb(err);
        cb(null, isMatch);
    });
};
module.exports = Recruiter = mongoose.model("Recruiter", RecruiterSchema);
