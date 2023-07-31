const mongoose = require('mongoose');
const itemSchema = require('./itemSchema');

// Define the Item model using the itemSchema.
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
