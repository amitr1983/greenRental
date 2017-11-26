'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CartSchema = new Schema({
  id: {
    primaryKey: true,
    unique: true,
    type: Number,
    autoIncrement: true
  },
  prod_id: {
    type: String,
    required: true
  },
  product_name: {
    type: String,
    required: true
  },
  product_description: {
    type: String,
    required: true
  },
  product_price: {
    type: Number,
    required: true
  },
  product_quantity: {
    type: Number,
    required: true
  },
  imagePath: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Cart', CartSchema);