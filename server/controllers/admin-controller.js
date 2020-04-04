const Product = require('mongoose').model('Product')

module.exports = {
  createProduct: (req, res) => {
    let data = req.body
    let productForCreate = {
      name: data.name,
      code: data.code,
      category: data.category,
      price: data.price,
      imageUrl: data.imageUrl,
      descriptions: data.descriptions.split(','),
      inStock: true
    }

    Product.create(productForCreate).then((product) => {
      res.status(200).send(product)
    }).catch(err => {
      res.status(400).send(err)
      res.end()
    })
},
  baseUrl: () => {
    return '/api/admin'
  }
}