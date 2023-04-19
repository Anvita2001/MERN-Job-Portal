const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const multer = require("multer");
const DB_NAME = "Assignment1"

// routes
//var TypeRouter = require("./routes/Types");i
var UserRouter = require("./routes/Users");
var JobRouter = require("./routes/Jobs");
var RecruiterRouter = require("./routes/Recruiters");
var FileRouter = require("./routes/Files");
var DashRouter = require("./routes/Dashs");


app.use(cors());
app.use(bodyParser.json());
//app.use("./routes/Files", express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/' + DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false, useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
//app.use("/type", TypeRouter);
app.use("/user", UserRouter);
app.use("/job", JobRouter);
app.use("/recruiter",RecruiterRouter);
app.use("/file",FileRouter);
app.use("/dash",DashRouter);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
