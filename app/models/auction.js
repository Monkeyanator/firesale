var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuctionSchema = new Schema({
    itemName: String, 
    imageUrl: String, 
    description: String
});

module.exports = mongoose.model('Auction', AuctionSchema);