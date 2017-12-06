'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderSchema = new Schema({
  productname: {
    type: String,
    required: true
  },
  productdescription: {
    type: String
  },
  price: {
    type: Number
  },
  quantity: {
    type: Number
  },
  imagePath: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  category: { 
    type: String,
    ref: 'Category' 
  },
  payment_card: { 
    type: String,
    ref: 'Category' 
  },
  email: { 
    type: String,
    ref: 'Category' 
  },
  cardname: {
    type: String,
  },
  cardnumber: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Orders', OrderSchema);