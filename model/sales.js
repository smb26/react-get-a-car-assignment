var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SaleSchema = new Schema ({
   name: String, //seller's name
   address: String, //seller's address
   city: String, //seller's city
   phoneNumber: String,
   email: String,
   carModel: String, //company who made the car
   carYear: Number, //year of car
   carManufacturer: String //model of car 
})

module.exports = mongoose.model('Sales', SaleSchema);