const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const JobSchema = new Schema({
        Title: {
                type: String,
                //required: true
        },
        Name_of_Recruiter: {
                type: String,
                //required: true
        },
	Email_of_Recruiter:{
		type:String,
		//required:true
	},
	Applications_allowed:{
		type:Number,
		//required:true
	},
	Positions:{
		type:Number,
		//required:true
	},
    wDate_deadline:{
            type: Date,
            //required: true
    },
	Required_skills:{
		type:String,
		//enum:['Python','Java','C','C++','Ruby','others'],
		//required:true
	},
	Job_type:{
		type:String,
               // enum:['Full-Time','Part-Time','Work-from-Home'],
                //required:true,
		        //default: 'Full-Time'
	},
	Duration:{
		type:Number,
		default:0,
		//required:true
	},
	Salary:{
		type:Number,
		//required:true
	}
	/*Number_of_applicants:{
		type:Number,
		//required:true
	},
	Applications_open:{
		type:Number,
		//required:true
	}*/
	/*Rating:{
		type:Number,
		default:0,
		required:true
	}*/
});

module.exports = Job = mongoose.model("Jobs", JobSchema);

