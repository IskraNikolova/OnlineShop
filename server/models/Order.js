const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
  creator: {type: ObjectId, ref: 'User'},
  product: {type: ObjectId, ref: 'Product'},
  date: {type: Date, default: Date.now()},
  size: {type: mongoose.Schema.Types.Number, required: '{PATH} is required'},
  quantity: {type: mongoose.Schema.Types.Number, required: '{PATH} is required'},
  status: {type: mongoose.Schema.Types.String, default: 'Pending'}
})

orderSchema.path('quantity').validate(function () {
  return this.quantity > 0
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order