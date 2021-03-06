const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const User = require('../models/User')
const Product = require('../models/Product')
const Order = require('../models/Order')

module.exports = (config) => {
  mongoose.connect(config.dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  mongoose.set('useCreateIndex', true)

  const db = mongoose.connection
  db.once('open', err => {
    if (err) {
      throw err
    }

    User.seedAdminUser().then(() => {
      console.log('Database ready')
    }).catch((reason) => {
      console.log('Error')
      console.log(reason)
    })       
  })

  db.on('error', reason => {
    console.log(reason)
  })
}