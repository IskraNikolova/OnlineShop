const Order = require('mongoose').model('Order')
const User = require('mongoose').model('User')

module.exports = {
  send: (req, res) => {
    const data = req.body
    // todo validate user and product

    const orderForCreate = {
      creator: data.user_id,
      product: data.product_id,
      date: Date.now(),
      size: data.size,
      quantity: data.quantity,
    }

    Order.create(orderForCreate).then((order) => {
      User.findOne({ _id: data.user_id })
        .then((user) => {
          user.orders.push(order._id)
          user.save(function (err) {
            if (err)  res.status(400).send(err)
            res.status(201).send(order)
          })
        })
    }).catch(err => {
      res.status(400).send(err)
    })
  },
  baseUrl: () => {
    return '/api/order'
  }
}