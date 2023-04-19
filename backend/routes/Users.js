var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
//const { check, validationResult } = require("express-validator");
//const bcrypt = require("bcrypt");

// Load User model
const User = require("../models/Users");

// GET request 
// Getting all the users
router.get("/", function(req, res) {
    User.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});


// POST request 
// Add a user to db
//router.post("/register",[check("Email").isEmail(),check("Name").isAlpha(),
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
                    let newUser=new User(da)
                
//let newUser=new User(da);
//console.log(newUser);
    // console.log("heyya");
 let resl={
        val:""};
    User.findOne({Email:req.body.Email}).then(use => {
        if(!use){
           newUser.save()
        .then(user => { resl.val=1;
                      res.json(resl); 

                        console.log(user)

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
router.post("/homepage",(req, res) =>{
    User.findOne({ Email: req.body.Email }, function(err, users) {
        if (err)
            console.log(err);
        else {
            if (!users) {
                //Not found
                //console.log("Not registered");
                res.send("1");
            } else {
                res.json(users);
            }
        }
    });
});

 router.post("/update",(req,res)=>
 {
    da=req.body
      //User.findOne({Email:req.body.Email}).then(users=>{
let resl={
        val:""};
    User.updateOne({Email:req.body.Email},
        {$set:{Name:req.body.Name}}).then(users=>{
        if(!users){

                        res.status(400).json(users);

            //resl.val=0;
            //res.json(resl);s
        }

        if(users){//resl.val=1;
           // res.json(resl);
           console.log(users);
                               res.status(200).json(users);
     

           // res.json(users);
        }
    });
        
    });   
 router.post("/update1",(req,res)=>
 {
    da=req.body
      //User.findOne({Email:req.body.Email}).then(users=>{
let resl={
        val:""};
    User.updateOne({Email:req.body.Email},
        {$set:{Skills:req.body.Skills}}).then(users=>{
        if(!users){
            resl.val=0;
            res.json(resl);
        }

        if(users){
           console.log(users);

            resl.val=1;
            res.json(resl);
                        

           // res.json(users);
        }
    });
});
  router.post("/update4",(req,res)=>
 {
    da=req.body
      //User.findOne({Email:req.body.Email}).then(users=>{
let resl={
        val:""};
    User.updateOne({Email:req.body.Email},
        {$set:{Password:req.body.Password}}).then(users=>{
        if(!users){
            console.log("aa")
            resl.val=0;
            res.json(resl);
        }

        if(users){
           console.log(users);

            resl.val=1;
            res.json(resl);
        }
    });
 }); 
   router.post("/update2",(req,res)=>
 {
    da=req.body
      //User.findOne({Email:req.body.Email}).then(users=>{
let resl={
        val:""};
    User.updateOne({Email:req.body.Email},
        {$set:{Institution1_name:req.body.Institution1_name, Start_year1:req.body.Start_year1,End_year1:req.body.End_year1}}).then(users=>{
        if(!users){
            console.log("aa")
            resl.val=0;
            res.json(resl);
        }

        if(users){
           console.log(users);

            resl.val=1;
            res.json(resl);
        }
    });
 }); 
      router.post("/update3",(req,res)=>
 {
    da=req.body
      //User.findOne({Email:req.body.Email}).then(users=>{
let resl={
        val:""};
    User.updateOne({Email:req.body.Email},
        {$set:{Institution2_name:req.body.Institution2_name, Start_year2:req.body.Start_year2,End_year2:req.body.End_year2}}).then(users=>{
        if(!users){
            console.log("aa")
            resl.val=0;
            res.json(resl);
        }

        if(users){
           console.log(users);

            resl.val=1;
            res.json(resl);
        }
    });
 }); 
router.post("/profile", (req, res) => {
 /*  const newUser = new User({
       Email: req.body.Email,
       Password:req.body.Password
   });*/
 
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
                    let newUser=new User(da)
                
let resl={
        val:""};
    
    //const Email = req.body.Email;
    // Find user by email
    User.findOne({ Email:req.body.Email}).then(users => {
        console.log(req.body.Password);
        // Check if user email exists
        if (!users) { console.log("saved")
            resl.val=0;
            res.json(resl);
        }
        else{
users.comparePassword(p, function(err, isMatch) {
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



module.exports = router;

