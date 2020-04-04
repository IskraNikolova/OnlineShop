const controllers = require('../controllers')
const restrictedPages = require('./auth')

module.exports = app => {
  //users
  app.get(controllers.user.baseUrl(), controllers.user.all)
  app.get(controllers.user.baseUrl() + '/:id', controllers.user.getById)
  app.post(controllers.user.baseUrl() + '/register', controllers.user.register)
  app.post(controllers.user.baseUrl() + '/login', controllers.user.login)

  //orders
  app.post(controllers.order.baseUrl(), restrictedPages.isAuthed, controllers.order.send)

  //admin
  app.post(controllers.admin.baseUrl() + '/createProduct', restrictedPages.hasRole('Admin'), controllers.admin.createProduct)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found')
    res.end()
  })
}