const encryption = require('../util/encryption')
const User = require('mongoose').model('User')

module.exports = {
  // POST
  register: async (req, res) => {
    const reqUser = req.body
    const salt = encryption.generateSalt()
    const hashedPass =
    encryption.generateHashedPassword(salt, reqUser.password)
    try {
      const user = await User.create({
        email: reqUser.email,
        hashedPass,
        salt,
        firstName: reqUser.firstName,
        lastName: reqUser.lastName,
        roles: [],
        orders: []
      })
      res.send(user)
    } catch (e) {
      res.status(500).send(e.message)
    }
  },
  login: async (req, res) => {
    const reqUser = req.body
    try {
      const user = await User.findOne({ email: reqUser.email })
      if (!user) {
        errorHandler('Invalid email')
        return
      }
      if (!user.authenticate(reqUser.password)) {
        errorHandler('Invalid password')
        return
      }
      res.send(user)
    } catch (e) {
      errorHandler(e.message)
    }
  
    function errorHandler(e) {
      res.status(500).send(e)
    }
  }
}