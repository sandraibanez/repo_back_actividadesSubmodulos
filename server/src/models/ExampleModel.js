const mongoose = require('mongoose');

var exampleSchema = new mongoose.Schema({
  roll: Number
});

var ExampleModel = mongoose.model('Example', exampleSchema);
console.log("ExampleModel",ExampleModel);
module.exports = ExampleModel;
