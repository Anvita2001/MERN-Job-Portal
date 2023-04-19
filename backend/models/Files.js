const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const FileSchema = new Schema({
	meta_data:{}
	
});


module.exports = File = mongoose.model("Files", FileSchema);
