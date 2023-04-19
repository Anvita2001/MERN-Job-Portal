var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
// Load User model
const Recruiter = require("../models/Recruiters");

// GET request 
// Getting all the users
router.get("/", function(req, res) {
    Recruiter.find(function(err, recruiters) {
		if (err) {
			console.log(err);
		} else {
			res.json(recruiters);
		}
	})
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
router.post("/homepage",(req, res) =>{
    Recruiter.findOne({ Email: req.body.Email }, function(err, rec) {
        if (err)
            console.log(err);
        else {
            if (!rec) {
                //Not found
                //console.log("Not registered");
                res.send("1");
            } else {
                res.json(rec);
            }
        }
    });
});
router.post("/login",
 (req, res) => {
    da=req.body
    bcrypt.genSalt(10, (err, salt) => {
            console.log("bcrypting")
           console.log(da)
            bcrypt.hash(da.Password, salt, (err, hash) => {
                if(err)
                    {throw err;
                    }
                    da.Password=hash;

                    //next();
                    let newRecruiter=new Recruiter(da)
                
//let newUser=new User(da);
//console.log(newUser);
    // console.log("heyya");
 let resl={
        val:""};
    Recruiter.findOne({Email:req.body.Email}).then(use => {
        if(!use){
           newRecruiter.save()
        .then(rec => { resl.val=1;
                      res.json(resl); 

                        console.log(rec)

            //res.status(200).json(user);
        })
        .catch(err => {
            resl.val=0;
                      res.json(resl); 
            //res.status(400).send(err);
        })  
        }
        else{
resl.val=0;
          res.json(resl); 
   
        
    }
        });
});
        });
});
 router.post("/update",(req,res)=>
 {
    da=req.body
      //User.findOne({Email:req.body.Email}).then(users=>{

        console.log("hi")
    Recruiter.updateOne({Email:req.body.Email},
        {$set:{Name:req.body.Name}}).then(rec=>{
        if(!rec){
console.log("not present")
                        res.status(400).json(rec);

            //resl.val=0;
            //res.json(resl);s
        }

        if(rec){//resl.val=1;
           // res.json(resl);
           console.log(rec);
           console.log(" present")

                               res.status(200).json(rec);
     

           // res.json(users);
        }
    });
        
    }); 
  router.post("/update1",(req,res)=>
 {
    da=req.body
      //User.findOne({Email:req.body.Email}).then(users=>{

        console.log("hi")
    Recruiter.updateOne({Email:req.body.Email},
        {$set:{Contact:req.body.Contact}}).then(rec=>{
        if(!rec){
console.log("not present")
                        res.status(400).json(rec);

            //resl.val=0;
            //res.json(resl);s
        }

        if(rec){//resl.val=1;
           // res.json(resl);
           console.log(rec);
           console.log(" present")

                               res.status(200).json(rec);
     

           // res.json(users);
        }
    });
        
    });
   router.post("/update2",(req,res)=>
 {
    da=req.body
      //User.findOne({Email:req.body.Email}).then(users=>{

        console.log("hi")
    Recruiter.updateOne({Email:req.body.Email},
        {$set:{Bio:req.body.Bio}}).then(rec=>{
        if(!rec){
console.log("not present")
                        res.status(400).json(rec);

            //resl.val=0;
            //res.json(resl);s
        }

        if(rec){//resl.val=1;
           // res.json(resl);
           console.log(rec);
           console.log(" present")

                               res.status(200).json(rec);
     

           // res.json(users);
        }
    });
        
    });
router.post("/register", (req, res) => {
    const newRecruiter = new Recruiter({
        Name: req.body.Name,
        Email: req.body.Email,
	Contact: req.body.Contact,
	Bio: req.body.Bio
    });

    newRecruiter.save()
        .then(recruiter => {
            res.status(200).json(recruiter);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});
router.post("/profile", (req, res) => {
 da=req.body
 var p=req.body.Password;
     bcrypt.genSalt(10, (err, salt) => {
            console.log("bcrypting")
            //console.log(da)
            bcrypt.hash(da.Password, salt, (err, hash) => {
                if(err)
                    {throw err;
                    }
                    da.Password=hash;
                    //next();
                    let newRecruiter=new Recruiter(da)
                
let resl={
        val:""};
    
    //const Email = req.body.Email;
    // Find user by email
    Recruiter.findOne({ Email:req.body.Email}).then(rec => {
        console.log(req.body.Password);
        // Check if user email exists
        if (!rec) { console.log("saved")
            resl.val=0;
            res.json(resl);
        }
        else{
rec.comparePassword(p, function(err, isMatch) {
                       if (err){
                        resl.val = 0;
                            res.json(resl);
                    }
                        console.log(req.body.Password, isMatch); // -> Password123: true
                        if (isMatch) {
                            //currentuser = req.body.username;
                            resl.val = 1;
                            //response.type = users.type;
                            res.json(resl);
                        } else {
                            resl.val = 0;
                            res.json(resl);
                        }

           // return user;
    });
}
});
});
 });
 });
// POST request 
// Login
/*router.post("/login", (req, res) => {
	const email = req.body.email;
	// Find user by email
	User.findOne({ email }).then(user => {
		// Check if user email exists
		if (!user) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send("Email Found");
            return user;
        }
	});
});
*/
module.exports = router;

