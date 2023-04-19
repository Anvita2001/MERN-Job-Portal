var express = require("express");
var router = express.Router();

// Load User model
const Job = require("../models/Jobs");

// GET request 
// Getting all the users
router.get("/", function(req, res) {
    Job.find(function(err, jobs) {
		if (err) {
			console.log(err);
		} else {
			res.json(jobs);
		}
	})
});
router.post("/addedjobs",(req, res) =>{
        da=req.body

    Job.find({ Email_of_Recruiter: req.body.Email_of_Recruiter }, function(err, jobs) {
        
        if (err){

            console.log(err);
        }
        else {
            if (!jobs) {
                //Not found
                //console.log("Not registered");
                res.send("1");
            } else {
                res.json(jobs);
            }
        }
    });
});
// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
router.post("/add", (req, res) => {
	let newJob=new Job(req.body)

    newJob.save()
        .then(job => {
        	console.log(job)
            res.status(200).json(job);
        })
        .catch(err => {
            res.status(400).send("1");
        });
});

router.post("/sortjobs",(req, res)=> {
    let s=req.body.type
    if(!req.body.type)
    {   
        console.log("default")
        s="Duration"
    }
    else
        console.log(s)
        var mysort = {s:1};
        Job.find().sort(s).exec(function(err, p) {
            if (err)
                console.log(err);
            else {
                console.log(p);
                res.json(p);
            }
        });
});

module.exports = router;

