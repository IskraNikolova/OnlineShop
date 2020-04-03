const user = require('../controllers/user-controller')
const baseUser = '/api/users'

module.exports = app => {
  app.post(baseUser + '/register', user.register)
  app.post(baseUser + '/login', user.login)
}