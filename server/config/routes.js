const controllers = require('../controllers')
const restrictedPages = require('./auth')

module.exports = app => {
  //users
  app.post(controllers.user.baseUrl() + '/register', controllers.user.register)
  app.post(controllers.user.baseUrl() + '/login', controllers.user.login)

  //orders
  app.post(controllers.order.baseUrl(), restrictedPages.isAuthed, controllers.order.send)
}