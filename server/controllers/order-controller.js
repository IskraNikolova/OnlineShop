const Order = require('mongoose').model('Order')
const Product = require('mongoose').model('Product')

module.exports = {
  send: (req, res) => {
    const data = req.body
    // todo validate user and product
    const orderForCreate = {
      creator: data.userId,
      product: data.product_id,
      date: Date.now(),
      size: data.size,
      quantity: data.quantity,
    }

    Order.create(orderForCreate).then((order) => {
      res.status(201).send(order)
    }).catch(err => {
      res.status(400).send(err)
    })
  },
  baseUrl: () => {
    return '/api/order'
  }
}