const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {type: mongoose.Schema.Types.String, required: '{PATH} is required', unique: true},
  code: {type: mongoose.Schema.Types.String, required: '{PATH} is required', unique: true},
  category: {type: mongoose.Schema.Types.String, required: '{PATH} is required'},
  price: {type: mongoose.Schema.Types.Number, required: '{PATH} is required'},
  imageUrl: {type: mongoose.Schema.Types.String, required: '{PATH} is required'},
  descriptions: [{type: mongoose.Schema.Types.String}],
  inStock: {type: mongoose.Schema.Types.Boolean}
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product