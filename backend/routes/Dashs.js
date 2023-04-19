var express = require("express");
var router = express.Router();

// Load User model
const Dash = require("../models/Dashs");
router.get("/", function(req, res) {
    User.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});
router.post("/added",(req, res) =>{
        da=req.body

    Dash.find({ Email_of_Recruiter: req.body.Email_of_Recruiter }, function(err, jobs) {
        
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
router.post("/add",(req, res) =>{
        da=req.body
        let newDash=new Dash(da)
    newDash.save().then(dash => {
        	console.log(dash)
            res.status(200).json(dash);
        })
        .catch(err => {
            res.status(400).send("1");
        });
});
   
module.exports = router;
