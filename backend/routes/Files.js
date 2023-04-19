var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const multer = require("multer");
//const { check, validationResult } = require("express-validator");
//const bcrypt = require("bcrypt");

// Load User model
const File = require("../models/Files");

// GET request 
// Getting all the users
const storage = multer.diskStorage({
   destination: "../",
   filename: function(req, file, cb){
      cb(null,"IMAGE-" + Date.now() + file.originalname);
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("myfile");

const obj =(req,res) => {
   upload(req, res, () => {
      console.log("Request ---", req.body);
      console.log("Request file ---", req.file);//Here you get file.
      const file = new File();
      file.meta_data = req.file;
      file.save().then(()=>{
      res.send({message:"uploaded successfully"})
      })
      /*Now do where ever you want to do*/
   });
}

router.post("/upload", obj);

module.exports = router;

