const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TypeSchema = new Schema({
	Typex:{
		type:String,
		enum:['Applicant','Recruiter'],
		required:true,
		trim:true
	}
});

module.exports = Typex = mongoose.model("Typex", TypeSchema);

